'use client';

import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:4000/api';

interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

interface Organisation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
  created_at: string;
}

interface LoginResponse {
  user: User;
  organisation: Organisation;
}

export default function ManagementPage() {
  const [form, setForm] = useState({ name: '', address: '', phone: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<LoginResponse | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const stored = localStorage.getItem('managementSession');
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
      setLoggedIn(true);
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    const endpoint = mode === 'register' ? '/management/register' : '/management/login';
    const body = mode === 'register' ? form : { email: form.email, password: form.password };

    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const result = await res.json();
    
    if (result.error) {
      setMessage(result.error);
    } else if (mode === 'register') {
      setMessage('Registration successful! Please login.');
      setMode('login');
      setForm({ ...form, name: '', address: '', phone: '' });
    } else {
      setMessage('Login successful!');
      localStorage.setItem('managementSession', JSON.stringify(result));
      setData(result);
      setLoggedIn(true);
      setForm({ name: '', address: '', phone: '', email: '', password: '' });
    }
  };

  const logout = () => {
    localStorage.removeItem('managementSession');
    setData(null);
    setLoggedIn(false);
    setForm({ name: '', address: '', phone: '', email: '', password: '' });
    setMessage('Logged out successfully');
  };

  if (loggedIn && data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">Prasunet Management</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{data.user.full_name}</span>
                <button onClick={logout} className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">Logout</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Menu</h3>
                <nav className="space-y-2">
                  <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Dashboard</button>
                  <button onClick={() => setActiveTab('students')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'students' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Students</button>
                  <button onClick={() => setActiveTab('teachers')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'teachers' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Teachers</button>
                  <button onClick={() => setActiveTab('parents')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'parents' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Parents</button>
                  <button onClick={() => setActiveTab('academic')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'academic' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Academic Structure</button>
                  <button onClick={() => setActiveTab('fees')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'fees' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Fee Management</button>
                  <button onClick={() => setActiveTab('attendance')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'attendance' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Attendance</button>
                  <button onClick={() => setActiveTab('communication')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'communication' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Communication</button>
                  <button onClick={() => setActiveTab('reports')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab === 'reports' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>Reports & Analytics</button>
                </nav>
              </div>
            </div>

            <div className="md:col-span-3">
              {data.user.role === 'admin' ? (
                <AdminDashboard />
              ) : (
                <>
                  {activeTab === 'dashboard' && <Dashboard data={data} />}
                  {activeTab === 'students' && <StudentsTab organisationId={data.organisation.id} />}
                  {activeTab === 'teachers' && <TeachersTab organisationId={data.organisation.id} />}
                  {activeTab === 'parents' && <ParentsTab organisationId={data.organisation.id} />}
                  {activeTab === 'academic' && <AcademicTab />}
                  {activeTab === 'fees' && <FeesTab />}
                  {activeTab === 'attendance' && <AttendanceTab />}
                  {activeTab === 'communication' && <CommunicationTab />}
                  {activeTab === 'reports' && <ReportsTab />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Management Portal</h1>
        <p className="text-center text-gray-600 mb-6">Register your school or college and manage students, teachers, and verification.</p>

        <div className="flex mb-6">
          <button onClick={() => setMode('register')} className={`flex-1 py-2 px-4 rounded-l-md ${mode === 'register' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Register</button>
          <button onClick={() => setMode('login')} className={`flex-1 py-2 px-4 rounded-r-md ${mode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>Login</button>
        </div>

        <div className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">School / College Name</label>
                <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input value={form.address} onChange={(e) => handleChange('address', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={form.password} onChange={(e) => handleChange('password', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <button onClick={submit} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            {mode === 'register' ? 'Register Organisation' : 'Login'}
          </button>
          {message && <p className="text-center text-sm text-red-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}

function Dashboard({ data }: { data: LoginResponse }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Organisation Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Organisation Name</label>
            <p className="mt-1 text-sm text-gray-900">{data.organisation.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">{data.organisation.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="mt-1 text-sm text-gray-900">{data.organisation.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <p className="mt-1 text-sm text-gray-900">{data.organisation.address}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${data.organisation.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {data.organisation.status.toUpperCase()}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organisation ID</label>
            <p className="mt-1 text-sm text-gray-500 font-mono">{data.organisation.id}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <p className="mt-1 text-sm text-gray-900">{data.user.full_name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">{data.user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
              {data.user.role.toUpperCase()}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <p className="mt-1 text-sm text-gray-500 font-mono">{data.user.id}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-blue-600">Students</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-green-600">Teachers</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">0</div>
            <div className="text-sm text-yellow-600">Parents</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-purple-600">Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentsTab({ organisationId }: { organisationId: string }) {
  const [students, setStudents] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [credentials, setCredentials] = useState<any[]>([]);
  const [showCredentials, setShowCredentials] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, [organisationId]);

  const fetchStudents = async () => {
    const res = await fetch(`${API_BASE}/management/${organisationId}/roster`);
    const data = await res.json();
    setStudents(data.students || []);
    setLoading(false);
  };

  const generateCredentials = async () => {
    const res = await fetch(`${API_BASE}/management/generate-student-credentials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organisationId })
    });
    const data = await res.json();
    if (data.credentials) {
      setCredentials(data.credentials);
      setShowCredentials(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Students Management</h2>
        <div className="space-x-2">
          <button onClick={generateCredentials} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Generate Credentials
          </button>
          <button onClick={() => setShowUpload(!showUpload)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            {showUpload ? 'Cancel Upload' : 'Upload Students'}
          </button>
        </div>
      </div>

      {showCredentials && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Generated Credentials</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {credentials.map((cred, index) => (
              <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                <span>{cred.roll_number}: {cred.email} / {cred.password}</span>
                <button className="text-blue-600">Copy</button>
              </div>
            ))}
          </div>
          <button onClick={() => setShowCredentials(false)} className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md">Close</button>
        </div>
      )}

      {showUpload && <UploadStudentsForm organisationId={organisationId} onSuccess={() => { setShowUpload(false); fetchStudents(); }} />}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student: any) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.roll_number}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.full_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.student_class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function UploadStudentsForm({ organisationId, onSuccess }: { organisationId: string; onSuccess: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('organisationId', organisationId);

    const res = await fetch(`${API_BASE}/management/upload-students`, {
      method: 'POST',
      body: formData
    });
    const result = await res.json();
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage('Students uploaded successfully!');
      onSuccess();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Students Data</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">CSV File</label>
          <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mt-1 block w-full" />
        </div>
        <button onClick={handleUpload} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Upload</button>
        {message && <p className="text-sm text-red-600">{message}</p>}
      </div>
    </div>
  );
}

function TeachersTab({ organisationId }: { organisationId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Teachers Management</h2>
      {/* Similar to StudentsTab */}
      <p>Teachers management features coming soon...</p>
    </div>
  );
}

function ParentsTab({ organisationId }: { organisationId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Parents Management</h2>
      <p>Parents management features coming soon...</p>
    </div>
  );
}

function AcademicTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Academic Structure</h2>
      <p>Academic structure management features coming soon...</p>
    </div>
  );
}

function FeesTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Fee Management</h2>
      <p>Fee management features coming soon...</p>
    </div>
  );
}

function AttendanceTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Attendance</h2>
      <p>Attendance management features coming soon...</p>
    </div>
  );
}

function CommunicationTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Communication</h2>
      <p>Communication features coming soon...</p>
    </div>
  );
}

function ReportsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Reports & Analytics</h2>
      <p>Reports and analytics features coming soon...</p>
    </div>
  );
}

function AdminDashboard() {
  const [organisations, setOrganisations] = useState([]);
  const [verificationRequests, setVerificationRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    const [orgRes, verRes] = await Promise.all([
      fetch(`${API_BASE}/management/admin/organisations`),
      fetch(`${API_BASE}/management/admin/verification-requests`)
    ]);
    const orgData = await orgRes.json();
    const verData = await verRes.json();
    setOrganisations(orgData);
    setVerificationRequests(verData);
    setLoading(false);
  };

  const approveOrganisation = async (id: string) => {
    await fetch(`${API_BASE}/management/admin/approve-organisation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organisationId: id })
    });
    fetchAdminData();
  };

  const rejectOrganisation = async (id: string) => {
    await fetch(`${API_BASE}/management/admin/reject-organisation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organisationId: id })
    });
    fetchAdminData();
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{organisations.length}</div>
          <div className="text-lg text-blue-600">Total Organisations</div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{verificationRequests.length}</div>
          <div className="text-lg text-green-600">Pending Verifications</div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">{organisations.filter((o: any) => o.status === 'active').length}</div>
          <div className="text-lg text-purple-600">Active Organisations</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Organisations</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {organisations.map((org: any) => (
                <tr key={org.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{org.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{org.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      org.status === 'active' ? 'bg-green-100 text-green-800' :
                      org.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {org.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {org.status === 'pending' && (
                      <>
                        <button onClick={() => approveOrganisation(org.id)} className="text-green-600 hover:text-green-900 mr-2">Approve</button>
                        <button onClick={() => rejectOrganisation(org.id)} className="text-red-600 hover:text-red-900">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Verification Requests</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {verificationRequests.map((req: any) => (
                <tr key={req.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.organisation_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.requested_by}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(req.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

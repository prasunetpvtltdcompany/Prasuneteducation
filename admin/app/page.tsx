'use client';

import { useState } from 'react';

const API_BASE = 'http://localhost:4000/api';

export default function AdminPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [data, setData] = useState<any>(null);
  const [message, setMessage] = useState('');

  const login = async () => {
    const res = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const result = await res.json();
    if (result.error) {
      setMessage(result.error);
      setData(null);
    } else {
      setData(result);
      setMessage('Admin authenticated');
    }
  };

  const verifyOrg = async (orgId: string, status: string) => {
    await fetch(`${API_BASE}/admin/verify-org`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ organisation_id: orgId, status })
    });
    setMessage('Organisation updated');
  };

  return (
    <main className="container">
      <h1>Admin Portal</h1>
      <p>Master verification and organization monitoring for platform operations.</p>
      <div className="card">
        <label>Email</label>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label>Password</label>
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button onClick={login}>Login as Admin</button>
        {message ? <p className="message">{message}</p> : null}
      </div>

      {data ? (
        <section className="info-card">
          <h2>Welcome, {data.user.full_name}</h2>
          <p><strong>Role:</strong> {data.user.role}</p>
          <h3>Organisations</h3>
          <div className="org-grid">
            {data.organisations?.map((org: any) => (
              <div className="org-card" key={org.id}>
                <h4>{org.name}</h4>
                <p>{org.email}</p>
                <p>Status: {org.status}</p>
                <button onClick={() => verifyOrg(org.id, 'verified')}>Verify</button>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

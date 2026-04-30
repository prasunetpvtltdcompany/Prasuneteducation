'use client';

import { useState } from 'react';

const API_BASE = 'http://localhost:4000/api';

export default function StaffPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState<any>(null);

  const login = async () => {
    const res = await fetch(`${API_BASE}/staff/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.error) {
      setMessage(data.error);
      setProfile(null);
    } else {
      setMessage('Login successful');
      setProfile(data.user);
    }
  };

  return (
    <main className="container">
      <h1>Staff Portal</h1>
      <p>Teacher login and access to student mappings, assignments, and communication tools.</p>
      <div className="card">
        <label>Email</label>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label>Password</label>
        <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button onClick={login}>Login</button>
        {message ? <p className="message">{message}</p> : null}
      </div>
      {profile ? (
        <section className="info-card">
          <h2>Welcome, {profile.full_name}</h2>
          <p><strong>Role:</strong> {profile.role}</p>
          <p>After login, you can access your class roster, student connections, and attendance tools.</p>
        </section>
      ) : null}
    </main>
  );
}

'use client';

import { useState } from 'react';

const API_BASE = 'http://localhost:4000/api';

export default function ParentsPage() {
  const [email, setEmail] = useState('');
  const [data, setData] = useState<any>(null);
  const [message, setMessage] = useState('');

  const login = async () => {
    const res = await fetch(`${API_BASE}/parents/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const result = await res.json();
    if (result.error) {
      setMessage(result.error);
      setData(null);
    } else {
      setData(result);
      setMessage('Parent login success');
    }
  };

  return (
    <main className="container">
      <h1>Parents Portal</h1>
      <p>Track your student, communicate with teachers, and monitor attendance and feedback.</p>
      <div className="card">
        <label>Parent email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="parent@example.com" />
        <button onClick={login}>Access Dashboard</button>
        {message ? <p className="message">{message}</p> : null}
      </div>

      {data ? (
        <section className="info-card">
          <h2>Welcome, {data.parent.full_name}</h2>
          <p><strong>Student:</strong> {data.student?.full_name || 'N/A'}</p>
          <p><strong>Class:</strong> {data.student?.student_class || 'N/A'}</p>
          <p>After verification, you can message teachers and review progress reports.</p>
        </section>
      ) : null}
    </main>
  );
}

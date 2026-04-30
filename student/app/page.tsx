'use client';

import { useState } from 'react';

const API_BASE = 'http://localhost:4000/api';

export default function StudentPage() {
  const [roll, setRoll] = useState('');
  const [profile, setProfile] = useState<any>(null);
  const [message, setMessage] = useState('');

  const login = async () => {
    const res = await fetch(`${API_BASE}/student/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: roll })
    });
    const data = await res.json();
    if (data.error) {
      setMessage(data.error);
      setProfile(null);
    } else {
      setProfile(data);
      setMessage('Logged in successfully');
    }
  };

  return (
    <main className="container">
      <h1>Student Portal</h1>
      <p>Access your student dashboard, connected teacher list, and academic profile.</p>
      <div className="card">
        <label>Enter your Roll Number</label>
        <input value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="Roll number" />
        <button onClick={login}>Login</button>
        {message ? <p className="message">{message}</p> : null}
      </div>

      {profile ? (
        <section className="info-card">
          <h2>Student Profile</h2>
          <p><strong>Name:</strong> {profile.student.full_name}</p>
          <p><strong>Class:</strong> {profile.student.student_class || 'N/A'}</p>
          <p><strong>Section:</strong> {profile.student.section || 'N/A'}</p>
          <p><strong>Teachers:</strong> {profile.teachers?.length ? profile.teachers.map((t: any) => t.full_name).join(', ') : 'None'}</p>
        </section>
      ) : null}
    </main>
  );
}

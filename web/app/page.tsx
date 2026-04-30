import Link from 'next/link';

const portals = [
  { label: 'Management', url: 'http://localhost:3001' },
  { label: 'Student', url: 'http://localhost:3002' },
  { label: 'Staff', url: 'http://localhost:3003' },
  { label: 'Parents', url: 'http://localhost:3004' },
  { label: 'Admin', url: 'http://localhost:3005' }
];

export default function Home() {
  return (
    <main className="container">
      <section>
        <h1>Prasunet Education Platform</h1>
        <p>Enterprise school and college management platform for institutions, teachers, parents, and admins.</p>
        <div className="grid">
          {portals.map((portal) => (
            <a key={portal.label} href={portal.url} className="card" target="_blank" rel="noreferrer">
              <h2>{portal.label}</h2>
              <p>Open the {portal.label.toLowerCase()} portal.</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

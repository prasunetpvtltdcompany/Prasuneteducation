import { Briefcase, MapPin, Users, Zap } from 'lucide-react';

export default function Careers() {
  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Chandigarh, India',
      type: 'Full-time',
      description: 'Build scalable solutions for the education sector'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Shape the future of educational technology'
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Multiple Cities',
      type: 'Full-time',
      description: 'Drive growth and expand our customer base'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chandigarh, India',
      type: 'Full-time',
      description: 'Ensure customer success and satisfaction'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive and beautiful user experiences'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Chandigarh, India',
      type: 'Full-time',
      description: 'Manage infrastructure and ensure platform reliability'
    }
  ];

  const perks = [
    {
      title: 'Competitive Salary',
      description: 'Market-competitive compensation packages'
    },
    {
      title: 'Health Benefits',
      description: 'Comprehensive health insurance coverage'
    },
    {
      title: 'Remote Work',
      description: 'Flexible work arrangements'
    },
    {
      title: 'Learning & Development',
      description: 'Professional development opportunities'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative and innovative work environment'
    },
    {
      title: 'Impact',
      description: 'Make a difference in education sector'
    }
  ];

  return (
    <div className="site-body">
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="navbar-brand">Prasynx</div>
          </div>
          <nav className="navbar-nav">
            <a href="/" className="navbar-link">Home</a>
            <a href="/solutions" className="navbar-link">Solutions</a>
            <a href="/platform" className="navbar-link">Platform</a>
            <a href="/customers" className="navbar-link">Customers</a>
            <a href="/resources" className="navbar-link">Resources</a>
            <a href="/contact" className="navbar-link">Contact</a>
          </nav>
          <div className="navbar-actions">
            <a href="/book-demo" className="navbar-link secondary-link">Book Demo</a>
            <a href="/" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>

      <main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo-alt">Careers at Prasynx</div>
            <p className="hero-subtitle">Join Our Mission to Transform Education</p>
          </div>
        </section>

        <section className="careers-intro">
          <div className="careers-container">
            <h2>Why Work With Us?</h2>
            <p>At Prasynx, we believe education is the foundation of society. We're building the platform that will empower millions of students, teachers, and administrators worldwide. If you're passionate about education and technology, we'd love to have you on our team.</p>
          </div>
        </section>

        <section className="perks-section">
          <div className="careers-container">
            <h2>What We Offer</h2>
            <div className="perks-grid">
              {perks.map((perk, index) => (
                <div key={index} className="perk-card">
                  <Zap size={32} />
                  <h3>{perk.title}</h3>
                  <p>{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="openings-section">
          <div className="careers-container">
            <h2>Open Positions</h2>
            <div className="openings-grid">
              {openings.map((opening, index) => (
                <article key={index} className="opening-card">
                  <div className="opening-header">
                    <h3>{opening.title}</h3>
                    <span className="opening-type">{opening.type}</span>
                  </div>
                  <div className="opening-meta">
                    <span className="badge">{opening.department}</span>
                    <div className="location">
                      <MapPin size={16} />
                      {opening.location}
                    </div>
                  </div>
                  <p>{opening.description}</p>
                  <button className="btn btn-secondary">View Details</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="culture-section">
          <div className="careers-container">
            <h2>Life at Prasynx</h2>
            <div className="culture-content">
              <div className="culture-item">
                <h3>🎯 Mission-Driven</h3>
                <p>Every team member contributes directly to our mission of transforming education globally.</p>
              </div>
              <div className="culture-item">
                <h3>🤝 Collaborative</h3>
                <p>We believe in the power of diverse perspectives and collaborative problem-solving.</p>
              </div>
              <div className="culture-item">
                <h3>📚 Learning-Focused</h3>
                <p>We invest in our people's growth through training, mentorship, and career development.</p>
              </div>
              <div className="culture-item">
                <h3>🚀 Innovation-First</h3>
                <p>We encourage experimentation and creative thinking to drive innovation forward.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Make an Impact?</h2>
            <p>Join the team transforming how education is managed and delivered worldwide.</p>
            <a href="/contact" className="btn btn-primary btn-large">Get In Touch</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-brand">Prasynx</div>
            <p>Education OS for the future.</p>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="/resources">Help Center</a>
            <a href="/book-demo">Book Demo</a>
            <a href="/solutions">Solutions</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Prasynx. All rights reserved.</p>
          <p className="footer-powered">Powered by Prasunet.</p>
        </div>
      </footer>
    </div>
  );
}

import { Users, Award, Globe, Target, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create next-generation solutions',
      icon: Lightbulb
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency and ethical standards in everything we do',
      icon: Award
    },
    {
      title: 'Inclusion',
      description: 'Making quality education technology accessible to all institutions',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'Dedicated to transforming education for millions of students worldwide',
      icon: Heart
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in product quality and service',
      icon: Target
    },
    {
      title: 'Global Vision',
      description: 'Operating globally while understanding local educational needs',
      icon: Globe
    }
  ];

  const team = [
    { role: 'Founder & CEO', name: 'Ajay Kumar', expertise: 'Ed-Tech Visionary' },
    { role: 'Chief Product Officer', name: 'Sarah Johnson', expertise: 'Product Innovation' },
    { role: 'VP Engineering', name: 'Rajesh Desai', expertise: 'Technology Leadership' },
    { role: 'VP Sales', name: 'Priya Saxena', expertise: 'Global Expansion' }
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
            <div className="hero-logo-alt">About Prasynx</div>
            <p className="hero-subtitle">Transforming Education Through Technology</p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-intro">
              <h2>Our Mission</h2>
              <p>To empower educational institutions with intelligent, secure, and user-friendly technology solutions that enhance learning experiences, streamline operations, and foster community engagement.</p>
            </div>

            <div className="about-story">
              <h2>Our Story</h2>
              <p>Founded in 2020, Prasynx emerged from a simple observation: educational institutions were struggling with fragmented systems and outdated management practices. Our founders, driven by a passion for education, set out to build a unified platform that would serve every stakeholder in the educational ecosystem.</p>
              <p>Today, Prasynx powers 500+ institutions across 15+ countries, serving millions of students, parents, and educators. We continue to innovate, driven by feedback from our community and a commitment to excellence.</p>
            </div>

            <div className="values-section">
              <h2>Our Core Values</h2>
              <div className="values-grid">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="value-card">
                      <Icon size={40} />
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="achievements">
              <h2>Key Milestones</h2>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <h3>2020</h3>
                  <p>Prasynx founded with vision to transform education</p>
                </div>
                <div className="achievement-item">
                  <h3>2021</h3>
                  <p>Reached 100+ institutions in India</p>
                </div>
                <div className="achievement-item">
                  <h3>2023</h3>
                  <p>Expanded globally to 15+ countries</p>
                </div>
                <div className="achievement-item">
                  <h3>2024</h3>
                  <p>Crossed 500+ institutions and 5M+ users milestone</p>
                </div>
              </div>
            </div>

            <div className="team-section">
              <h2>Leadership Team</h2>
              <div className="team-grid">
                {team.map((member, index) => (
                  <div key={index} className="team-member">
                    <div className="team-member-avatar">{member.name.charAt(0)}</div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-expertise">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Us in Transforming Education</h2>
            <p>Be part of a global movement to revolutionize how institutions operate and how students learn</p>
            <a href="/book-demo" className="btn btn-primary btn-large">Schedule Demo</a>
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
            <h3>Products</h3>
            <a href="/solutions">Solutions</a>
            <a href="/platform">Platform</a>
            <a href="/customers">Customers</a>
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

import { Zap, Cloud, Lock, Smartphone, Gauge, Layers } from 'lucide-react';

export default function Platform() {
  const features = [
    {
      title: 'Cloud-Based Infrastructure',
      description: 'Secure, scalable platform accessible from anywhere, anytime.',
      icon: Cloud
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get instant insights into campus operations and student performance.',
      icon: Gauge
    },
    {
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with international standards.',
      icon: Lock
    },
    {
      title: 'Mobile First Design',
      description: 'Fully responsive interface optimized for all devices.',
      icon: Smartphone
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing systems through powerful APIs.',
      icon: Layers
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized for performance with 99.9% uptime guarantee.',
      icon: Zap
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
            <div className="hero-logo-alt">Our Platform</div>
            <p className="hero-subtitle">Built for Scalability, Security, and Performance</p>
          </div>
        </section>

        <section className="platform-features">
          <div className="platform-container">
            <h2>Cutting-Edge Technology Stack</h2>
            <div className="features-grid">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-card-large">
                    <div className="feature-icon-large">
                      <Icon size={48} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="platform-architecture">
          <div className="platform-container">
            <h2>Architecture Highlights</h2>
            <div className="architecture-grid">
              <div className="architecture-item">
                <h3>Microservices</h3>
                <p>Modular architecture for flexibility and scalability</p>
              </div>
              <div className="architecture-item">
                <h3>API-First</h3>
                <p>RESTful APIs for seamless third-party integrations</p>
              </div>
              <div className="architecture-item">
                <h3>Data Privacy</h3>
                <p>GDPR compliant with advanced data protection</p>
              </div>
              <div className="architecture-item">
                <h3>Auto-Scaling</h3>
                <p>Handles peak loads with automatic resource allocation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Experience the Next Generation of Educational Technology</h2>
            <p>Get a personalized walkthrough of our platform and discover the possibilities.</p>
            <a href="/book-demo" className="btn btn-primary btn-large">Request Demo</a>
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
            <h3>Platform</h3>
            <a href="/platform">Features</a>
            <a href="/solutions">Solutions</a>
            <a href="/security">Security</a>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
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

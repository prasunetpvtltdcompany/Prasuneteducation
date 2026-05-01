import { GraduationCap, UserCheck, Heart, Shield, Globe, Sun, CloudRain, Phone, Mail, MapPin, Share2, MessageCircle, Users } from 'lucide-react';

const loginPortals = [
  {
    title: 'Student Login',
    description: 'Login with your UID and Password to access your Student Services and account progress.',
    icon: GraduationCap
  },
  {
    title: 'Parents Login',
    description: 'Login with your Parent Id / Student Id and Password to access your Children Services',
    icon: Heart
  },
  {
    title: 'Staff Login',
    description: 'Login using your Employee Code and Password to access your account.',
    icon: UserCheck
  },
  {
    title: 'Management Login',
    description: 'For Institute Leadership only. Use your ID Code and Password for portal access.',
    icon: Shield
  },
  {
    title: 'Admin Login',
    description: 'Use your admin credentials to manage campus operations, reports, and system settings.',
    icon: Globe
  }
];

const forecast = [
  { day: 'Friday', temp: '38°C', icon: Sun },
  { day: 'Saturday', temp: '25°C', icon: CloudRain },
  { day: 'Sunday', temp: '41°C', icon: CloudRain },
  { day: 'Monday', temp: '28°C', icon: CloudRain },
  { day: 'Tuesday', temp: '22°C', icon: CloudRain },
  { day: 'Wednesday', temp: '22°C', icon: CloudRain },
  { day: 'Thursday', temp: '24°C', icon: Sun }
];

export default function Home() {
  return (
    <div className="site-body">
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <GraduationCap className="navbar-icon" />
            <div>
              <div className="navbar-brand">Prasynx</div>
              <div className="navbar-subtitle">Education OS</div>
            </div>
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
            <a href="#portals" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>

      <main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo">Prasynx</div>
            <p className="hero-subtitle">Prasynx – One Platform for Every Role </p>
          </div>

          <div className="portal-grid">
            {loginPortals.map((portal) => {
              const Icon = portal.icon;
              return (
                <article key={portal.title} className="portal-card">
                  <div className="portal-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2>{portal.title}</h2>
                    <p>{portal.description}</p>
                  </div>
                  <a className="btn btn-login" href="#">Login Now</a>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <GraduationCap className="footer-icon" />
              <div>
                <div className="footer-brand">Prasynx</div>
                <div className="footer-subtitle">Education OS</div>
              </div>
            </div>
            <p>Empowering educational institutions with modern, secure, and efficient management solutions. Our platform streamlines operations, enhances learning experiences, and fosters community engagement across schools and universities.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Share2 size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Users size={20} /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/solutions">Solutions</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
            <a href="/resources">Resources</a>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <a href="/solutions">Student Portal</a>
            <a href="/solutions">Parent Portal</a>
            <a href="/solutions">Staff Portal</a>
            <a href="/solutions">Admin Portal</a>
            <a href="/solutions">Management Dashboard</a>
            <a href="/solutions">Analytics & Reporting</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="/resources">Help Center</a>
            <a href="/resources">Documentation</a>
            <a href="/resources">API Reference</a>
            <a href="/customers">Case Studies</a>
            <a href="/resources">FAQs</a>
            <a href="/resources">Branding Guidelines</a>
          </div>
          <div className="footer-section">
            <h3>Business</h3>
            <a href="/customers">Clientele</a>
            <a href="/contact">Partner With Us</a>
            <a href="/customers">Partners</a>
            <a href="/customers">Testimonials</a>
            <a href="/careers">Life at Prasynx</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/terms">Compliance</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="/contact">Contact Support</a>
            <a href="/">System Status</a>
            <a href="/platform">Security</a>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <Phone size={16} />
              <span> +91 8905483183</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span> prasunetcompany@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span> Chandigarh, India </span>
            </div>
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest updates and insights.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-newsletter">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Prasynx. All rights reserved. | Designed for educational excellence.</p>
          <p className="footer-powered">Powered by Prasunet.</p>
        </div>
      </footer>
    </div>
  );
}

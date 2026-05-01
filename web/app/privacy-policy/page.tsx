export default function PrivacyPolicy() {
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
            <div className="hero-logo-alt">Privacy Policy</div>
            <p className="hero-subtitle">Your Privacy is Our Priority</p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-container">
            <div className="legal-content">
              <p className="last-updated">Last Updated: May 1, 2026</p>

              <h2>1. Introduction</h2>
              <p>Prasynx ("we", "us", "our") operates the Prasynx platform. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information we receive from users of our Services.</p>

              <h2>2. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us. This includes:</p>
              <ul>
                <li>Personal identification information (name, email, phone number)</li>
                <li>Institution information (name, type, location)</li>
                <li>Academic and administrative data</li>
                <li>Log data and analytics</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information for various purposes:</p>
              <ul>
                <li>Providing and maintaining our Services</li>
                <li>Improving and optimizing the platform</li>
                <li>Sending administrative information and updates</li>
                <li>Responding to your inquiries</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest, and we maintain strict access controls.</p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
                <li>Data portability</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>We use cookies to enhance user experience. You can control cookie settings through your browser preferences.</p>

              <h2>7. Third-Party Sharing</h2>
              <p>We do not sell or share your personal information with third parties without your consent, except as required by law.</p>

              <h2>8. Contact Us</h2>
              <p>For privacy-related questions, contact us at privacy@prasynx.com</p>

              <h2>9. Policy Changes</h2>
              <p>We may update this policy periodically. We will notify you of significant changes via email.</p>
            </div>
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
            <h3>Legal</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/sitemap">Sitemap</a>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="/resources">Help Center</a>
            <a href="/book-demo">Book Demo</a>
            <a href="/solutions">Solutions</a>
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

export default function Terms() {
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
            <div className="hero-logo-alt">Terms & Conditions</div>
            <p className="hero-subtitle">Please Read These Terms Carefully</p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-container">
            <div className="legal-content">
              <p className="last-updated">Last Updated: May 1, 2026</p>

              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using the Prasynx platform, you accept and agree to be bound by the terms and provision of this agreement.</p>

              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Prasynx for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

              <h2>3. Disclaimer</h2>
              <p>The materials on Prasynx are provided on an 'as is' basis. Prasynx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h2>4. Limitations</h2>
              <p>In no event shall Prasynx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prasynx.</p>

              <h2>5. Accuracy of Materials</h2>
              <p>The materials appearing on Prasynx could include technical, typographical, or photographic errors. Prasynx does not warrant that any of the materials on its platform are accurate, complete, or current.</p>

              <h2>6. Materials on Third Party Websites</h2>
              <p>Prasynx has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Prasynx of the site.</p>

              <h2>7. Modifications</h2>
              <p>Prasynx may revise these terms of service for its platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.</p>

              <h2>8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

              <h2>9. User Responsibilities</h2>
              <p>Users are responsible for maintaining the confidentiality of their account information and password. Users agree to accept responsibility for all activities that occur under their account.</p>

              <h2>10. Prohibited Activities</h2>
              <p>Users agree not to engage in any activity that disrupts or interferes with the Services, including:</p>
              <ul>
                <li>Unauthorized access attempts</li>
                <li>Interference with system functionality</li>
                <li>Data mining or scraping</li>
                <li>Transmission of harmful code</li>
              </ul>

              <h2>11. Contact for Disputes</h2>
              <p>For any disputes or concerns regarding these terms, please contact legal@prasynx.com</p>
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

import SiteShell from "../components/SiteShell";
export default function Sitemap() {
    return (
    <SiteShell>
<main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo-alt">Sitemap</div>
            <p className="hero-subtitle">Navigate All Pages & Resources</p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-container">
            <div className="legal-content">
              <h2>Main Pages</h2>
              <ul>
                <li><a href="/">Home</a> - Landing page</li>
                <li><a href="/solutions">Solutions</a> - Our comprehensive solutions</li>
                <li><a href="/platform">Platform</a> - Technology and features</li>
                <li><a href="/customers">Customers</a> - Testimonials and case studies</li>
                <li><a href="/resources">Resources</a> - Documentation and guides</li>
                <li><a href="/contact">Contact</a> - Get in touch with us</li>
              </ul>

              <h2>Company</h2>
              <ul>
                <li><a href="/about">About Us</a> - Learn about Prasynx</li>
                <li><a href="/careers">Careers</a> - Join our team</li>
                <li><a href="/book-demo">Book Demo</a> - Schedule a demo</li>
              </ul>

              <h2>Legal & Policies</h2>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a> - Our privacy practices</li>
                <li><a href="/terms">Terms & Conditions</a> - Terms of service</li>
              </ul>

              <h2>Resources</h2>
              <ul>
                <li>Help Center - Documentation and FAQs</li>
                <li>Knowledge Base - Extensive articles</li>
                <li>API Reference - Developer documentation</li>
                <li>Case Studies - Real-world success stories</li>
                <li>Branding Guidelines - Brand resources</li>
              </ul>

              <h2>Services</h2>
              <ul>
                <li>Student Management System</li>
                <li>Parent Engagement Portal</li>
                <li>Staff Management Tools</li>
                <li>Admin Portal</li>
                <li>Management Dashboard</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
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
            <div className="hero-logo-alt">Contact Us</div>
            <p className="hero-subtitle">Get in Touch With Our Team</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-form-wrapper">
                <h2>Send us a Message</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input type="text" id="organization" placeholder="Your institution" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info-wrapper">
                <h2>Get in Touch</h2>
                <div className="contact-info-item">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 8905483183</p>
                    <p className="secondary-text">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>support@prasynx.com</p>
                    <p>sales@prasynx.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Address</h4>
                    <p>Chandigarh, India</p>
                    <p className="secondary-text">Global Operations in 15+ countries</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Clock size={24} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday - Sunday: 10:00 AM - 4:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="support-options">
          <div className="contact-container">
            <h2>Other Ways to Connect</h2>
            <div className="support-grid">
              <div className="support-option">
                <h3>Live Chat</h3>
                <p>Chat with our support team in real-time</p>
                <button className="btn btn-secondary">Start Chat</button>
              </div>
              <div className="support-option">
                <h3>Book a Demo</h3>
                <p>Schedule a personalized product demo</p>
                <a href="/book-demo" className="btn btn-secondary">Book Now</a>
              </div>
              <div className="support-option">
                <h3>Help Center</h3>
                <p>Browse our extensive knowledge base</p>
                <a href="/resources" className="btn btn-secondary">Explore</a>
              </div>
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
            <h3>Support</h3>
            <a href="/contact">Contact Us</a>
            <a href="/resources">Help Center</a>
            <a href="/book-demo">Book Demo</a>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
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

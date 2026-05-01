import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SiteShell from "../components/SiteShell";

export default function Contact() {
    return (
    <SiteShell>
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
    </SiteShell>
  );
}
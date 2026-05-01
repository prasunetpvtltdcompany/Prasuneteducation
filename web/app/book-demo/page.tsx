import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function BookDemo() {
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
            <div className="hero-logo-alt">Book Your Demo</div>
            <p className="hero-subtitle">See Prasynx in Action - Personalized for Your Institution</p>
          </div>
        </section>

        <section className="demo-section">
          <div className="demo-container">
            <div className="demo-grid">
              <div className="demo-form-wrapper">
                <h2>Schedule Your 30-Minute Demo</h2>
                <p className="form-subtitle">Our experts will walk you through how Prasynx can transform your institution</p>
                
                <form className="demo-form">
                  <div className="form-group">
                    <label htmlFor="institution">Institution Name</label>
                    <input type="text" id="institution" placeholder="Your institution" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Your Role</label>
                    <select id="role" required>
                      <option value="">Select your role</option>
                      <option value="principal">Principal</option>
                      <option value="admin">Administrator</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                      <option value="it-manager">IT Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" id="fname" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" id="lname" placeholder="Last name" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interests">What are you most interested in?</label>
                    <div className="checkboxes">
                      <label>
                        <input type="checkbox" name="interest" value="student-management" />
                        Student Management
                      </label>
                      <label>
                        <input type="checkbox" name="interest" value="parent-engagement" />
                        Parent Engagement
                      </label>
                      <label>
                        <input type="checkbox" name="interest" value="staff-management" />
                        Staff Management
                      </label>
                      <label>
                        <input type="checkbox" name="interest" value="analytics" />
                        Analytics & Reporting
                      </label>
                      <label>
                        <input type="checkbox" name="interest" value="security" />
                        Security & Compliance
                      </label>
                      <label>
                        <input type="checkbox" name="interest" value="integration" />
                        API Integration
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea id="message" rows={3} placeholder="Tell us about your institution..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">Schedule Demo</button>
                </form>
              </div>

              <div className="demo-benefits">
                <h2>What You'll Learn</h2>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Platform Overview</h4>
                      <p>Complete walkthrough of all modules and features</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Custom Implementation</h4>
                      <p>How Prasynx adapts to your institution's specific needs</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Security & Compliance</h4>
                      <p>Enterprise-grade security and regulatory compliance</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Integration Capabilities</h4>
                      <p>Seamless integration with existing systems</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Pricing & Support</h4>
                      <p>Transparent pricing and dedicated support options</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle size={24} />
                    <div>
                      <h4>Implementation Timeline</h4>
                      <p>Realistic timeline and onboarding process</p>
                    </div>
                  </div>
                </div>

                <div className="demo-info">
                  <div className="info-item">
                    <Calendar size={24} />
                    <div>
                      <h4>Flexible Scheduling</h4>
                      <p>Choose a time that works for you</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Clock size={24} />
                    <div>
                      <h4>30 Minutes</h4>
                      <p>Quick but comprehensive walkthrough</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Users size={24} />
                    <div>
                      <h4>Expert Consultant</h4>
                      <p>Dedicated to your industry</p>
                    </div>
                  </div>
                </div>
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
            <h3>Get Started</h3>
            <a href="/book-demo">Book Demo</a>
            <a href="/contact">Contact Us</a>
            <a href="/resources">Resources</a>
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

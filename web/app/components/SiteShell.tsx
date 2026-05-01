import type { ReactNode } from 'react';
import { GraduationCap, Phone, Mail, MapPin, Share2, MessageCircle, Users } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/platform', label: 'Platform' },
  { href: '/customers', label: 'Customers' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' }
];

const footerSections = [
  {
    title: 'Quick Links',
    items: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/contact', label: 'Contact' },
      { href: '/careers', label: 'Careers' },
      { href: '/resources', label: 'Resources' }
    ]
  },
  {
    title: 'Services',
    items: [
      { href: '/solutions', label: 'Student Portal' },
      { href: '/solutions', label: 'Parent Portal' },
      { href: '/solutions', label: 'Staff Portal' },
      { href: '/solutions', label: 'Admin Portal' },
      { href: '/solutions', label: 'Management Dashboard' },
      { href: '/solutions', label: 'Analytics & Reporting' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { href: '/resources', label: 'Help Center' },
      { href: '/resources', label: 'Documentation' },
      { href: '/resources', label: 'API Reference' },
      { href: '/customers', label: 'Case Studies' },
      { href: '/resources', label: 'FAQs' },
      { href: '/resources', label: 'Branding Guidelines' }
    ]
  },
  {
    title: 'Business',
    items: [
      { href: '/customers', label: 'Clientele' },
      { href: '/contact', label: 'Partner With Us' },
      { href: '/customers', label: 'Partners' },
      { href: '/customers', label: 'Testimonials' },
      { href: '/careers', label: 'Life at Prasynx' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/sitemap', label: 'Sitemap' },
      { href: '/terms', label: 'Compliance' }
    ]
  },
  {
    title: 'Support',
    items: [
      { href: '/contact', label: 'Contact Support' },
      { href: '/', label: 'System Status' },
      { href: '/platform', label: 'Security' }
    ]
  }
];

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="navbar-actions">
            <a href="/book-demo" className="navbar-link secondary-link">Book Demo</a>
            <a href="/getstarted" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>

      {children}

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

          {footerSections.map((section) => (
            <div key={section.title} className="footer-section">
              <h3>{section.title}</h3>
              {section.items.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </div>
          ))}

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

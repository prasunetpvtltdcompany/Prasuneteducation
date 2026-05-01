import { Zap, Cloud, Lock, Smartphone, Gauge, Layers } from 'lucide-react';
import SiteShell from "../components/SiteShell";

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
    <SiteShell>
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
    </SiteShell>
  );
}
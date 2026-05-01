import { Star, Quote } from 'lucide-react';
import SiteShell from "../components/SiteShell";

export default function Customers() {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal, Delhi Public School',
      content: 'Prasynx has transformed how we manage our institution. The student portal has improved engagement significantly.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Parent & Guardian',
      content: 'Finally, I can track my child\'s progress in real-time. The app notifications keep me updated throughout the day.',
      rating: 5
    },
    {
      name: 'Arun Patel',
      role: 'Academic Director, Mumbai Institute',
      content: 'The analytics dashboard gives us insights we never had before. Data-driven decisions are now the norm.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      role: 'IT Manager, Global University',
      content: 'Seamless integration with our existing systems. Support team is incredibly responsive.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Registrar, Bangalore Tech College',
      content: 'Implementation was smooth. Staff took to it immediately. Highly recommended for any institution.',
      rating: 5
    },
    {
      name: 'Neha Gupta',
      role: 'Admin Head, Chennai School',
      content: 'Time savings are extraordinary. What took hours now takes minutes. Best investment we made.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      institution: 'Delhi Public School Network',
      challenge: 'Managing 50+ schools with different systems',
      solution: 'Unified Prasynx platform across all campuses',
      result: '40% reduction in administrative time, 95% parent satisfaction'
    },
    {
      institution: 'Mumbai Institute of Excellence',
      challenge: 'Poor communication between departments',
      solution: 'Integrated workflow and real-time collaboration',
      result: '60% faster decision-making, 88% staff efficiency increase'
    },
    {
      institution: 'Bangalore Tech University',
      challenge: 'Data security and compliance issues',
      solution: 'Enterprise security and audit trails',
      result: 'Full GDPR compliance, zero security incidents'
    }
  ];

    return (
    <SiteShell>
<main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo-alt">Our Customers</div>
            <p className="hero-subtitle">Trusted by Leading Educational Institutions</p>
          </div>
        </section>

        <section className="customers-stats">
          <div className="customers-container">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Educational Institutions</p>
            </div>
            <div className="stat-item">
              <h3>5M+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Global Support</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="customers-container">
            <h2>What Customers Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <Quote size={20} />
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-content">{testimonial.content}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies">
          <div className="customers-container">
            <h2>Case Studies</h2>
            <div className="case-studies-grid">
              {caseStudies.map((study, index) => (
                <div key={index} className="case-study-card">
                  <h3>{study.institution}</h3>
                  <div className="case-study-content">
                    <div>
                      <strong>Challenge:</strong>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <strong>Solution:</strong>
                      <p>{study.solution}</p>
                    </div>
                    <div>
                      <strong>Result:</strong>
                      <p className="result-highlight">{study.result}</p>
                    </div>
                  </div>
                  <a href="/book-demo" className="btn btn-secondary">Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Join 500+ Institutions Transforming Education</h2>
            <p>Start your journey with Prasynx today</p>
            <a href="/book-demo" className="btn btn-primary btn-large">Get Started</a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
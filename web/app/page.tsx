import { GraduationCap, UserCheck, Heart, Shield, ExternalLink, CheckCircle, ArrowRight, Globe, Lock, Zap } from 'lucide-react';

const dashboards = [
  {
    label: 'Admin',
    url: 'http://localhost:3005',
    icon: Shield,
    description: 'Complete system administration and configuration management.',
    features: ['User management', 'System configuration', 'Reports & analytics']
  },
  {
    label: 'Parents',
    url: 'http://localhost:3004',
    icon: Heart,
    description: 'Monitor student performance and stay connected with teachers.',
    features: ['Progress tracking', 'Teacher communication', 'Attendance insights']
  },
  {
    label: 'Staff',
    url: 'http://localhost:3003',
    icon: UserCheck,
    description: 'Tools for teaching, planning, and student collaboration.',
    features: ['Lesson planning', 'Grade management', 'Classroom tools']
  },
  {
    label: 'Student',
    url: 'http://localhost:3002',
    icon: GraduationCap,
    description: 'Access assignments, courses, and resources from anywhere.',
    features: ['Course materials', 'Assignment portal', 'Progress dashboard']
  },
  {
    label: 'Management',
    url: 'http://localhost:3006',
    icon: Globe,
    description: 'Operations dashboard for business, finance, and institutional leadership.',
    features: ['Performance reporting', 'Budget tracking', 'Resource planning']
  }
];

const features = [
  {
    icon: Lock,
    title: 'Secure & Compliant',
    description: 'Built with education data privacy and enterprise-grade security in mind.'
  },
  {
    icon: Zap,
    title: 'Fast & Responsive',
    description: 'A lightning-fast experience for every role, on desktop and mobile.'
  },
  {
    icon: Globe,
    title: 'Cloud Ready',
    description: 'Access the platform from school, home, or on the go with reliable sync.'
  }
];

const stats = [
  { value: '10,000+', label: 'Students' },
  { value: '500+', label: 'Teachers' },
  { value: '50+', label: 'Institutions' },
  { value: '99.9%', label: 'Uptime' }
];

export default function Home() {
  return (
    <div className="site-body">
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-logo">
            <GraduationCap className="navbar-icon" />
            <div>
              <div className="navbar-brand">Prasunet</div>
              <div className="navbar-subtitle">Education OS</div>
            </div>
          </div>
          <div className="navbar-links">
            <a className="navbar-link" href="#solutions">Solutions</a>
            <a className="navbar-link" href="#features">Features</a>
            <a className="navbar-link" href="#dashboards">Portals</a>
            <a className="navbar-link" href="#about">About</a>
            <a className="navbar-link" href="#contact">Contact</a>
          </div>
          <a className="btn btn-primary" href="#dashboards">Get Started</a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">School management reimagined</span>
              <h1>Modern education software with powerful portals for every role.</h1>
              <p className="hero-text">
                Prasunet brings administrators, teachers, students, and parents together in a polished platform built for performance, security, and collaboration.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#dashboards">View Portals</a>
                <a className="btn btn-secondary" href="#features">Explore Features</a>
              </div>
              <div className="hero-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="hero-stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-badge">Trusted by schools and colleges</div>
                <div className="visual-image" />
                <div className="visual-summary">
                  <div>
                    <div className="visual-title">Unified portal view</div>
                    <div className="visual-description">Student, teacher, parent, and admin access in a single experience.</div>
                  </div>
                  <div className="visual-action">
                    <ArrowRight className="visual-action-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="feature-section">
          <div className="container section-header">
            <div>
              <div className="section-label">Why Prasunet?</div>
              <h2>Everything your institution needs in one elegant system.</h2>
            </div>
            <p className="section-description">
              Designed for modern educational organizations that need clean workflows, clear visibility, and strong collaboration across staff, students, parents, and administrators.
            </p>
          </div>

          <div className="container feature-grid">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent className="feature-icon-svg" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="solutions" className="feature-section">
          <div className="container section-header">
            <div>
              <div className="section-label">Solutions</div>
              <h2>Powerful modules for every education workflow.</h2>
            </div>
            <p className="section-description">
              Prasunet includes tailored solutions for administration, academics, communication, and performance tracking to support modern institutions.
            </p>
          </div>

          <div className="container feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Lock className="feature-icon-svg" />
              </div>
              <h3>Secure Administration</h3>
              <p>Centralize governance, user roles, and policy controls with audit-ready workflows.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap className="feature-icon-svg" />
              </div>
              <h3>Academic Operations</h3>
              <p>Manage courses, attendance, grading, and curriculum planning from one platform.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Globe className="feature-icon-svg" />
              </div>
              <h3>Community Engagement</h3>
              <p>Improve parent-teacher communication, notifications, and student support across cohorts.</p>
            </div>
          </div>
        </section>

        <section id="about" className="feature-section">
          <div className="container section-header">
            <div>
              <div className="section-label">About</div>
              <h2>Designed for growth, trusted by educators.</h2>
            </div>
            <p className="section-description">
              Prasunet is built to help schools and colleges improve operations, reduce manual work, and create a better experience for every user.
            </p>
          </div>

          <div className="container about-grid">
            <div>
              <p>
                Our education platform gives institutions the tools to manage campus operations, learning experiences, and community engagement in a single, elegant system. From student onboarding to report generation, Prasunet removes friction and makes every action more productive.
              </p>
              <ul className="about-list">
                <li>Secure data management and role-based access</li>
                <li>Real-time insights for leadership and faculty</li>
                <li>Mobile-ready experience for students and parents</li>
              </ul>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-header">Customer success</div>
                <div className="about-card-body">
                  <p>Institutions using Prasunet report faster administration, better communication, and more engaged students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dashboards" className="portal-section">
          <div className="container section-header">
            <div>
              <div className="section-label">Portals</div>
              <h2>Dashboards for admin, parents, staff and students.</h2>
            </div>
            <p className="section-description">
              Easy access cards built for every role with clear actions, role-specific descriptions, and polished visuals.
            </p>
          </div>

          <div className="container portal-grid">
            {dashboards.map((dashboard) => {
              const IconComponent = dashboard.icon;
              return (
                <a key={dashboard.label} href={dashboard.url} target="_blank" rel="noreferrer" className="portal-card">
                  <div className="portal-card-top">
                    <div className="portal-card-icon">
                      <IconComponent className="portal-card-icon-svg" />
                    </div>
                    <div>
                      <div className="portal-card-label">{dashboard.label}</div>
                      <div className="portal-card-title">{dashboard.label} Dashboard</div>
                    </div>
                  </div>
                  <p className="portal-card-description">{dashboard.description}</p>
                  <ul className="portal-features">
                    {dashboard.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle className="portal-feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="portal-card-footer">
                    <span>Open portal</span>
                    <ExternalLink className="portal-footer-icon" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="section-label">Join institutions that trust Prasunet</div>
            <h2>Built to scale with your campus, from one school to entire districts.</h2>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary btn-large" href="#dashboards">Start a Demo</a>
            <a className="btn btn-secondary" href="#about">Contact Sales</a>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <div className="navbar-logo">
              <GraduationCap className="navbar-icon" />
              <div>
                <div className="navbar-brand">Prasunet</div>
                <div className="navbar-subtitle">Education OS</div>
              </div>
            </div>
            <p className="footer-copy">Prasunet helps institutions simplify operations, enhance learning, and keep every stakeholder connected with a beautiful education platform.</p>
            <div className="footer-contact">
              <div><strong>Email:</strong> hello@prasunet.com</div>
              <div><strong>Phone:</strong> +1 (800) 555-0199</div>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <div className="footer-heading">Product</div>
              <a href="#dashboards">Portals</a>
              <a href="#solutions">Solutions</a>
              <a href="#features">Features</a>
            </div>
            <div>
              <div className="footer-heading">Company</div>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <div className="footer-heading">Resources</div>
              <a href="#">Blog</a>
              <a href="#">Help Center</a>
              <a href="#">Case Studies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

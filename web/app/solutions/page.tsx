import { CheckCircle, Users, BarChart3, BookOpen, Shield, Zap } from 'lucide-react';
import SiteShell from "../components/SiteShell";

export default function Solutions() {
  const solutions = [
    {
      title: 'Student Management',
      description: 'Comprehensive student information system with attendance, grades, and academic progress tracking.',
      icon: BookOpen,
      features: ['Attendance Tracking', 'Grade Management', 'Progress Reports', 'Certificates']
    },
    {
      title: 'Parent Engagement',
      description: 'Keep parents informed with real-time updates on student performance and school activities.',
      icon: Users,
      features: ['Real-time Updates', 'Progress Alerts', 'Event Notifications', 'Direct Communication']
    },
    {
      title: 'Staff Management',
      description: 'Streamline staff operations with payroll, attendance, and performance management.',
      icon: CheckCircle,
      features: ['Payroll Processing', 'Attendance', 'Performance Reviews', 'Leave Management']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for informed decision-making and institutional growth.',
      icon: BarChart3,
      features: ['Custom Reports', 'Performance Metrics', 'Trend Analysis', 'Export Features']
    },
    {
      title: 'Campus Security',
      description: 'Advanced security measures to ensure a safe learning environment for everyone.',
      icon: Shield,
      features: ['Access Control', 'Audit Logs', 'Role-based Permissions', 'Data Encryption']
    },
    {
      title: 'Operational Efficiency',
      description: 'Automate administrative tasks and reduce manual workload significantly.',
      icon: Zap,
      features: ['Task Automation', 'Workflow Management', 'Resource Planning', 'Schedule Optimization']
    }
  ];

    return (
    <SiteShell>
<main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo-alt">Solutions</div>
            <p className="hero-subtitle">Comprehensive Platform Solutions for Modern Education</p>
          </div>
        </section>

        <section className="solutions-grid">
          <div className="solutions-container">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <article key={index} className="solution-card">
                  <div className="solution-icon">
                    <Icon size={40} />
                  </div>
                  <h3>{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                  <ul className="solution-features">
                    {solution.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/book-demo" className="btn btn-secondary">Learn More</a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Institution?</h2>
            <p>Get access to all solutions with a personalized demo and consultation.</p>
            <a href="/book-demo" className="btn btn-primary btn-large">Schedule Your Demo</a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
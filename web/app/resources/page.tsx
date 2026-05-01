import { FileText, BookOpen, Video, Code, HelpCircle, Download } from 'lucide-react';
import SiteShell from "../components/SiteShell";

export default function Resources() {
  const resources = [
    {
      category: 'Documentation',
      icon: FileText,
      items: [
        { title: 'Getting Started Guide', description: 'Quick setup and onboarding guide' },
        { title: 'User Manual', description: 'Comprehensive feature documentation' },
        { title: 'API Reference', description: 'Complete API documentation' },
        { title: 'FAQ', description: 'Answers to common questions' }
      ]
    },
    {
      category: 'Learning Resources',
      icon: BookOpen,
      items: [
        { title: 'Knowledge Base', description: 'Extensive article library' },
        { title: 'Best Practices', description: 'Tips and implementation strategies' },
        { title: 'Case Studies', description: 'Real-world success stories' },
        { title: 'Webinars', description: 'Live and recorded training sessions' }
      ]
    },
    {
      category: 'Videos & Tutorials',
      icon: Video,
      items: [
        { title: 'Feature Tours', description: 'Visual feature walkthroughs' },
        { title: 'How-To Videos', description: 'Step-by-step video guides' },
        { title: 'Integration Guides', description: 'Third-party integration tutorials' },
        { title: 'Admin Training', description: 'Advanced administration videos' }
      ]
    },
    {
      category: 'Developer Resources',
      icon: Code,
      items: [
        { title: 'SDK Documentation', description: 'Software development kits' },
        { title: 'Code Samples', description: 'Implementation examples' },
        { title: 'API Sandbox', description: 'Test environment' },
        { title: 'GitHub Repository', description: 'Open source libraries' }
      ]
    },
    {
      category: 'Support Center',
      icon: HelpCircle,
      items: [
        { title: 'Contact Support', description: 'Get help from our team' },
        { title: 'Community Forum', description: 'Connect with other users' },
        { title: 'Ticket System', description: 'Track support requests' },
        { title: 'Status Page', description: 'System status updates' }
      ]
    },
    {
      category: 'Downloads',
      icon: Download,
      items: [
        { title: 'Mobile Apps', description: 'iOS and Android applications' },
        { title: 'Desktop Clients', description: 'Windows and Mac clients' },
        { title: 'White Papers', description: 'Research and insights' },
        { title: 'Templates', description: 'Customizable templates' }
      ]
    }
  ];

    return (
    <SiteShell>
<main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo-alt">Resources</div>
            <p className="hero-subtitle">Everything You Need to Succeed with Prasynx</p>
          </div>
        </section>

        <section className="resources-section">
          <div className="resources-container">
            <div className="resources-grid">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <article key={index} className="resource-category">
                    <div className="resource-header">
                      <Icon size={32} />
                      <h3>{resource.category}</h3>
                    </div>
                    <ul className="resource-items">
                      {resource.items.map((item, i) => (
                        <li key={i}>
                          <a href="#">
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="resources-cta">
          <div className="resources-container">
            <div className="cta-box">
              <h2>Can't find what you're looking for?</h2>
              <p>Our support team is here to help you succeed</p>
              <a href="/contact" className="btn btn-primary">Contact Support</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
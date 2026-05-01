import { GraduationCap, UserCheck, Heart, Shield, Globe } from 'lucide-react';
import SiteShell from "../components/SiteShell";

const loginPortals = [
  {
    title: 'Student Login',
    description: 'Login with your UID and Password to access your Student Services and account progress.',
    icon: GraduationCap
  },
  {
    title: 'Parents Login',
    description: 'Login with your Parent Id / Student Id and Password to access your Children Services',
    icon: Heart
  },
  {
    title: 'Staff Login',
    description: 'Login using your Employee Code and Password to access your account.',
    icon: UserCheck
  },
  {
    title: 'Management Login',
    description: 'For Institute Leadership only. Use your ID Code and Password for portal access.',
    icon: Shield
  },
  {
    title: 'Admin Login',
    description: 'Use your admin credentials to manage campus operations, reports, and system settings.',
    icon: Globe
  }
];

export default function GetStarted() {
  return (
    <SiteShell>
      <main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo">Prasynx</div>
            <p className="hero-subtitle">Get Started - Choose Your Portal</p>
          </div>

          <div className="portal-grid">
            {loginPortals.map((portal) => {
              const Icon = portal.icon;
              return (
                <article key={portal.title} className="portal-card">
                  <div className="portal-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2>{portal.title}</h2>
                    <p>{portal.description}</p>
                  </div>
                  <a className="btn btn-login" href="#">Login Now</a>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
'use client';

import { GraduationCap, UserCheck, Heart, Shield, Globe, Sun, CloudRain, Phone, Mail, MapPin, Share2, MessageCircle, Users } from 'lucide-react';
import { useState } from 'react';
import SiteShell from "./components/SiteShell";

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



export default function Home() {
  const [showPortals, setShowPortals] = useState(false);

  return (
    <SiteShell onGetStarted={() => setShowPortals(true)}>
<main className="landing-page">
        <section className="hero-panel">
          <div className="hero-branding">
            <div className="hero-logo">Prasynx</div>
            <p className="hero-subtitle">Prasynx – One Platform for Every Role </p>
          </div>

          <section className="feature-section">
            <div className="feature-intro">
              <h1>We Make finding Jobs <span>Simple</span>, Swift and Secure</h1>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <h3>Our Vision</h3>
                <p>Our vision is to unlock 100 Million Jobs by Empowering 10 Million MSMEs & enterprises. We are on a mission to become a unified, credentialed employment platform for Bharat that bridges:</p>
                <ul>
                  <li>Rural–Urban gap</li>
                  <li>Formal–Informal gap</li>
                  <li>Skilled–Unskilled gap</li>
                </ul>
              </article>

              <article className="feature-card feature-card-center">
                <h3>Our Mission</h3>
                <p>To create India&apos;s most trusted and accessible employment platform to enable structured, scalable, and inclusive hiring across Bharat.</p>
              </article>

              <article className="feature-card">
                <h3>Our Purpose</h3>
                <p>To connect verified workers with local employers and make hiring simple, trusted, and accessible across Bharat.</p>
              </article>
            </div>
          </section>

          <div id="portals" className={`portal-grid ${showPortals ? 'visible' : 'hidden'}`}>
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
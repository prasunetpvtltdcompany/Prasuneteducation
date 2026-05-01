import { GraduationCap, UserCheck, Heart, Shield, Globe, Sun, CloudRain, Phone, Mail, MapPin, Share2, MessageCircle, Users } from 'lucide-react';
import SiteShell from "./components/SiteShell";



export default function Home() {
  return (
    <SiteShell>
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
        </section>
      </main>
    </SiteShell>
  );
}
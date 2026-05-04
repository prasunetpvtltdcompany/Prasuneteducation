import { Cloud, Gauge, Layers, Lock, Smartphone, Zap } from 'lucide-react';
import SiteShell from '../components/SiteShell';
import { CtaBand, FeatureCard, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const features = [
  { title: 'Cloud Infrastructure', description: 'Secure, scalable access from anywhere with high availability built in.', icon: Cloud },
  { title: 'Real-Time Analytics', description: 'Instant visibility into campus operations, student progress, and team performance.', icon: Gauge },
  { title: 'Enterprise Security', description: 'Encryption, permissioning, audit controls, and privacy-aware data handling.', icon: Lock },
  { title: 'Mobile First Design', description: 'Responsive interfaces that work cleanly across phones, tablets, and desktops.', icon: Smartphone },
  { title: 'Seamless Integration', description: 'API-first foundations for connecting existing tools and third-party systems.', icon: Layers },
  { title: 'Lightning Fast', description: 'Optimized flows and stable architecture for everyday institutional usage.', icon: Zap }
];

const architecture = [
  { title: 'Microservices', description: 'Modular services keep the platform flexible and easier to scale.' },
  { title: 'API-First', description: 'Structured APIs support integrations with existing education systems.' },
  { title: 'Data Privacy', description: 'Controls and access boundaries protect sensitive student and institution data.' },
  { title: 'Auto-Scaling', description: 'Infrastructure adapts during peak admission, exam, and reporting periods.' }
];

export default function Platform() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Platform"
          title="A Future-Ready Foundation for Education Operations"
          description="The Prasynx platform is designed for security, speed, integrations, and long-term maintainability."
        />

        <PageSection>
          <SectionHeader
            eyebrow="Technology"
            title="Modern, Scalable, and Easy to Operate"
            description="Platform features are data-driven in this file, making future additions straightforward."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Architecture" title="Architecture Highlights" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {architecture.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <CtaBand
          title="Experience the Next Generation of Educational Technology"
          description="Get a personalized walkthrough of the platform and discover how it fits your institution."
          href="/book-demo"
          action="Request Demo"
        />
      </PageMain>
    </SiteShell>
  );
}

import { Award, Globe, Heart, Lightbulb, Target, Users } from 'lucide-react';
import SiteShell from '../components/SiteShell';
import { CtaBand, FeatureCard, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const values = [
  { title: 'Innovation', description: 'Pushing boundaries to create practical next-generation education tools.', icon: Lightbulb },
  { title: 'Integrity', description: 'Operating with transparency and ethical standards in everything we do.', icon: Award },
  { title: 'Inclusion', description: 'Making quality education technology accessible to institutions of all sizes.', icon: Users },
  { title: 'Impact', description: 'Transforming education outcomes for students, parents, and educators.', icon: Heart },
  { title: 'Excellence', description: 'Keeping product quality, security, and service standards high.', icon: Target },
  { title: 'Global Vision', description: 'Serving global institutions while respecting local education needs.', icon: Globe }
];

const milestones = [
  { year: '2020', text: 'Prasynx founded with a mission to simplify education operations.' },
  { year: '2021', text: 'Reached 100+ institutions across India.' },
  { year: '2023', text: 'Expanded platform adoption across 15+ countries.' },
  { year: '2024', text: 'Crossed 500+ institutions and millions of active users.' }
];

const team = [
  { role: 'Founder & CEO', name: 'Ajay Kumar', expertise: 'Ed-Tech Visionary' },
  { role: 'Chief Product Officer', name: 'Sarah Johnson', expertise: 'Product Innovation' },
  { role: 'VP Engineering', name: 'Rajesh Desai', expertise: 'Technology Leadership' },
  { role: 'VP Sales', name: 'Priya Saxena', expertise: 'Global Expansion' }
];

export default function About() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="About Prasynx"
          title="Transforming Education Through Better Systems"
          description="We build secure, intelligent, and user-friendly tools that help institutions run smoothly and support better learning experiences."
        />

        <PageSection>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
              <h2 className="text-2xl font-black text-slate-950">Our Mission</h2>
              <p className="mt-4 leading-8 text-slate-600">
                To empower educational institutions with intelligent, secure, and user-friendly technology solutions that enhance learning experiences, streamline operations, and foster community engagement.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
              <h2 className="text-2xl font-black text-slate-950">Our Story</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Prasynx emerged from a simple observation: institutions were struggling with fragmented systems. We built one unified platform for every stakeholder in the education ecosystem.
              </p>
            </article>
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Values" title="The Principles Behind the Product" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </PageSection>

        <PageSection>
          <SectionHeader eyebrow="Milestones" title="A Clear Growth Path" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="text-3xl font-black text-blue-600">{milestone.year}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{milestone.text}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Team" title="Leadership Team" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-900/5">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-slate-950 text-2xl font-black text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">{member.name}</h3>
                <p className="mt-1 text-sm font-extrabold text-blue-600">{member.role}</p>
                <p className="mt-2 text-sm text-slate-500">{member.expertise}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <CtaBand
          title="Join Us in Transforming Education"
          description="Be part of a global movement to improve how institutions operate and how students learn."
          href="/book-demo"
          action="Schedule Demo"
        />
      </PageMain>
    </SiteShell>
  );
}

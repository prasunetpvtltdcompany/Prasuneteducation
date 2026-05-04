import { Briefcase, HeartHandshake, Lightbulb, MapPin, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import SiteShell from '../components/SiteShell';
import { CtaBand, FeatureCard, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const openings = [
  { title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Chandigarh, India', type: 'Full-time', description: 'Build scalable solutions for the education sector.' },
  { title: 'Product Manager', department: 'Product', location: 'Remote', type: 'Full-time', description: 'Shape the future of educational technology.' },
  { title: 'Sales Executive', department: 'Sales', location: 'Multiple Cities', type: 'Full-time', description: 'Drive growth and expand our customer base.' },
  { title: 'Customer Success Manager', department: 'Customer Success', location: 'Chandigarh, India', type: 'Full-time', description: 'Ensure customer success and satisfaction.' },
  { title: 'UI/UX Designer', department: 'Design', location: 'Remote', type: 'Full-time', description: 'Create intuitive and beautiful user experiences.' },
  { title: 'DevOps Engineer', department: 'Engineering', location: 'Chandigarh, India', type: 'Full-time', description: 'Manage infrastructure and platform reliability.' }
];

const perks = [
  { title: 'Competitive Salary', description: 'Market-competitive compensation packages.', icon: Briefcase },
  { title: 'Health Benefits', description: 'Comprehensive health insurance coverage.', icon: HeartHandshake },
  { title: 'Remote Work', description: 'Flexible work arrangements for focused teams.', icon: Users },
  { title: 'Learning & Development', description: 'Professional growth, training, and mentorship.', icon: Lightbulb },
  { title: 'Team Culture', description: 'Collaborative and thoughtful ways of working.', icon: Target },
  { title: 'Impact', description: 'Build products that improve education operations.', icon: Zap }
];

const culture = [
  { title: 'Mission-Driven', description: 'Every team member contributes directly to better education workflows.' },
  { title: 'Collaborative', description: 'We value diverse perspectives and calm problem-solving.' },
  { title: 'Learning-Focused', description: 'We invest in growth through training, mentorship, and ownership.' },
  { title: 'Innovation-First', description: 'We encourage experimentation when it solves real user problems.' }
];

export default function Careers() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Careers"
          title="Build the Future of Education With Us"
          description="Join a team working on meaningful software for students, teachers, parents, and institutions."
        />

        <PageSection>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <SectionHeader align="left" title="Why Work With Us?" />
            <p className="max-w-4xl leading-8 text-slate-600">
              At Prasynx, we believe education is the foundation of society. We are building the platform that empowers institutions worldwide, and we want people who care about practical technology with real impact.
            </p>
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Benefits" title="What We Offer" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {perks.map((perk) => (
              <FeatureCard key={perk.title} {...perk} />
            ))}
          </div>
        </PageSection>

        <PageSection>
          <SectionHeader eyebrow="Open Roles" title="Current Positions" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {openings.map((opening) => (
              <article key={opening.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black text-slate-950">{opening.title}</h3>
                  <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{opening.type}</span>
                </div>
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{opening.department}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {opening.location}
                  </span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-7 text-slate-600">{opening.description}</p>
                <Link href="/contact" className="inline-flex justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  View Details
                </Link>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Culture" title="Life at Prasynx" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {culture.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <CtaBand
          title="Ready to Make an Impact?"
          description="Join the team transforming how education is managed and delivered worldwide."
          href="/contact"
          action="Get In Touch"
        />
      </PageMain>
    </SiteShell>
  );
}

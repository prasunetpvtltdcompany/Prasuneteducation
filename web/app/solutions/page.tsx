import { BarChart3, BookOpen, CheckCircle, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import SiteShell from '../components/SiteShell';
import { CtaBand, FeatureCard, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const solutions = [
  {
    title: 'Student Management',
    description: 'Attendance, grades, academic records, certificates, and progress tracking in one reliable workspace.',
    icon: BookOpen,
    features: ['Attendance tracking', 'Grade management', 'Progress reports', 'Certificates']
  },
  {
    title: 'Parent Engagement',
    description: 'Keep guardians informed with real-time progress updates, alerts, announcements, and communication tools.',
    icon: Users,
    features: ['Real-time updates', 'Progress alerts', 'Event notifications', 'Direct communication']
  },
  {
    title: 'Staff Management',
    description: 'Simplify staff operations across attendance, leave, payroll, performance, and day-to-day workflows.',
    icon: CheckCircle,
    features: ['Payroll processing', 'Attendance', 'Performance reviews', 'Leave management']
  },
  {
    title: 'Analytics & Reporting',
    description: 'Give leadership clear dashboards for institutional growth, trend analysis, and faster decisions.',
    icon: BarChart3,
    features: ['Custom reports', 'Performance metrics', 'Trend analysis', 'Export features']
  },
  {
    title: 'Campus Security',
    description: 'Protect sensitive education data with permissions, audit trails, encryption, and access controls.',
    icon: Shield,
    features: ['Access control', 'Audit logs', 'Role-based permissions', 'Data encryption']
  },
  {
    title: 'Operational Efficiency',
    description: 'Automate repetitive administrative tasks so teams can spend more time supporting learners.',
    icon: Zap,
    features: ['Task automation', 'Workflow management', 'Resource planning', 'Schedule optimization']
  }
];

export default function Solutions() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Solutions"
          title="One Connected Platform for Every Education Workflow"
          description="Prasynx brings student, parent, staff, admin, and management operations into a structured system that is easy to scale and maintain."
          metrics={[
            { value: '6+', label: 'Core modules' },
            { value: '40%', label: 'Less admin time' },
            { value: '24/7', label: 'Support coverage' }
          ]}
        />

        <PageSection>
          <SectionHeader
            eyebrow="Modules"
            title="Built Around the Real Work of Institutions"
            description="Each solution area is separated clearly, so future changes are simple: edit the data array at the top of this page."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <FeatureCard key={solution.title} icon={solution.icon} title={solution.title} description={solution.description}>
                <ul className="grid gap-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo" className="mt-5 inline-flex text-sm font-black text-blue-600 hover:text-blue-800">
                  Learn more
                </Link>
              </FeatureCard>
            ))}
          </div>
        </PageSection>

        <CtaBand
          title="Ready to Transform Your Institution?"
          description="Get access to all solution areas with a personalized demo and implementation consultation."
          href="/book-demo"
          action="Schedule Your Demo"
        />
      </PageMain>
    </SiteShell>
  );
}

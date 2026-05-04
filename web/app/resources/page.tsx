import { BookOpen, Code, Download, FileText, HelpCircle, Video } from 'lucide-react';
import Link from 'next/link';
import SiteShell from '../components/SiteShell';
import { CtaBand, FeatureCard, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const resources = [
  { category: 'Documentation', icon: FileText, items: ['Getting Started Guide', 'User Manual', 'API Reference', 'FAQ'] },
  { category: 'Learning Resources', icon: BookOpen, items: ['Knowledge Base', 'Best Practices', 'Case Studies', 'Webinars'] },
  { category: 'Videos & Tutorials', icon: Video, items: ['Feature Tours', 'How-To Videos', 'Integration Guides', 'Admin Training'] },
  { category: 'Developer Resources', icon: Code, items: ['SDK Documentation', 'Code Samples', 'API Sandbox', 'GitHub Repository'] },
  { category: 'Support Center', icon: HelpCircle, items: ['Contact Support', 'Community Forum', 'Ticket System', 'Status Page'] },
  { category: 'Downloads', icon: Download, items: ['Mobile Apps', 'Desktop Clients', 'White Papers', 'Templates'] }
];

export default function Resources() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Resources"
          title="Guides, Support, and Tools for Every Team"
          description="Find the materials your administrators, staff, and technical teams need to get the most from Prasynx."
        />

        <PageSection>
          <SectionHeader
            eyebrow="Resource Library"
            title="Organized for Quick Future Updates"
            description="Each resource category is controlled by one array at the top of this page."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <FeatureCard key={resource.category} icon={resource.icon} title={resource.category} description="Browse curated materials for this area.">
                <div className="grid gap-3">
                  {resource.items.map((item) => (
                    <Link key={item} href="#" className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                      {item}
                    </Link>
                  ))}
                </div>
              </FeatureCard>
            ))}
          </div>
        </PageSection>

        <CtaBand
          title="Can't Find What You're Looking For?"
          description="Our support team can point you to the right guide or help you plan the next step."
          href="/contact"
          action="Contact Support"
        />
      </PageMain>
    </SiteShell>
  );
}

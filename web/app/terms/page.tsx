import SiteShell from '../components/SiteShell';
import { PageHero, PageMain, PageSection } from '../components/MarketingSections';

const sections = [
  { title: '1. Acceptance of Terms', body: ['By accessing and using the Prasynx platform, you agree to be bound by these terms and conditions.'] },
  { title: '2. Use License', body: ['Permission is granted to temporarily access platform materials for permitted institutional or personal use. This is a license, not a transfer of ownership.'] },
  { title: '3. Disclaimer', body: ['Materials on Prasynx are provided on an "as is" basis. Prasynx disclaims warranties to the extent permitted by applicable law.'] },
  { title: '4. Limitations', body: ['Prasynx and its suppliers shall not be liable for damages arising from use or inability to use platform materials where restricted by these terms or applicable law.'] },
  { title: '5. Accuracy of Materials', body: ['Materials may include technical, typographical, or content errors. We may update platform information at any time.'] },
  { title: '6. Third Party Websites', body: ['Prasynx is not responsible for third-party website content linked from the platform. Links do not imply endorsement.'] },
  { title: '7. Modifications', body: ['Prasynx may revise these terms periodically. Continued use of the platform means acceptance of the current terms.'] },
  { title: '8. Governing Law', body: ['These terms are governed by the laws of India, with jurisdiction as applicable under Indian law.'] },
  { title: '9. User Responsibilities', body: ['Users are responsible for keeping account credentials confidential and for activities under their account.'] },
  { title: '10. Prohibited Activities', body: ['Users must not disrupt services, attempt unauthorized access, scrape data, or transmit harmful code.'], items: ['Unauthorized access attempts', 'Interference with system functionality', 'Data mining or scraping', 'Transmission of harmful code'] },
  { title: '11. Contact for Disputes', body: ['For disputes or concerns regarding these terms, contact legal@prasynx.com.'] }
];

export default function Terms() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero eyebrow="Terms & Conditions" title="Clear Terms for Using Prasynx" description="Please read these terms carefully before using the platform." />
        <PageSection>
          <article className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
            <p className="mb-8 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-500">Last Updated: May 1, 2026</p>
            <div className="grid gap-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-3 leading-8 text-slate-600">{paragraph}</p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 grid gap-2 pl-5 text-slate-600">
                      {section.items.map((item) => <li key={item} className="list-disc">{item}</li>)}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </PageSection>
      </PageMain>
    </SiteShell>
  );
}

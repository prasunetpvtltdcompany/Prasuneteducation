import SiteShell from '../components/SiteShell';
import { PageHero, PageMain, PageSection } from '../components/MarketingSections';

const sections = [
  { title: '1. Introduction', body: ['Prasynx ("we", "us", "our") operates the Prasynx platform. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information we receive from users of our services.'] },
  { title: '2. Information We Collect', body: ['We collect information you provide directly to us, such as when you create an account, subscribe to services, or contact us.'], items: ['Personal identification information', 'Institution information', 'Academic and administrative data', 'Log data and analytics'] },
  { title: '3. How We Use Your Information', body: ['We use collected information to provide, maintain, improve, and support the platform.'], items: ['Providing and maintaining services', 'Improving platform performance', 'Sending administrative updates', 'Responding to inquiries', 'Complying with legal obligations'] },
  { title: '4. Data Security', body: ['We implement industry-standard security measures. Data is encrypted in transit and at rest, and access controls are maintained across the platform.'] },
  { title: '5. Your Rights', body: ['You may request access, correction, deletion, opt-out, or portability of your personal data where applicable.'] },
  { title: '6. Cookies and Tracking', body: ['We use cookies to enhance user experience. You can control cookie settings through your browser preferences.'] },
  { title: '7. Third-Party Sharing', body: ['We do not sell personal information and only share it when required to provide services, comply with law, or with your consent.'] },
  { title: '8. Contact Us', body: ['For privacy-related questions, contact us at privacy@prasynx.com.'] },
  { title: '9. Policy Changes', body: ['We may update this policy periodically and will notify users of significant changes.'] }
];

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero eyebrow="Privacy Policy" title="Your Privacy Is Our Priority" description="A clear overview of how Prasynx handles information, security, and user rights." />
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

import { Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import SiteShell from '../components/SiteShell';
import { inputClass, labelClass, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const interests = ['Student Management', 'Parent Engagement', 'Staff Management', 'Analytics & Reporting', 'Security & Compliance', 'API Integration'];

const learnItems = [
  'Platform overview',
  'Custom implementation',
  'Security and compliance',
  'Integration capabilities',
  'Pricing and support',
  'Implementation timeline'
];

const demoInfo = [
  { title: 'Flexible Scheduling', description: 'Choose a time that works for you.', icon: Calendar },
  { title: '30 Minutes', description: 'A quick but comprehensive walkthrough.', icon: Clock },
  { title: 'Expert Consultant', description: 'Talk with someone who understands education workflows.', icon: Users }
];

export default function BookDemo() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Book Demo"
          title="See Prasynx in Action"
          description="Schedule a personalized walkthrough built around your institution, team size, and operational priorities."
        />

        <PageSection>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <SectionHeader align="left" title="Schedule Your 30-Minute Demo" description="Tell us what you need and we will tailor the walkthrough." />
              <form className="grid gap-5">
                <div className="grid gap-2">
                  <label className={labelClass} htmlFor="institution">Institution Name</label>
                  <input className={inputClass} type="text" id="institution" placeholder="Your institution" required />
                </div>
                <div className="grid gap-2">
                  <label className={labelClass} htmlFor="role">Your Role</label>
                  <select className={inputClass} id="role" required>
                    <option value="">Select your role</option>
                    <option value="principal">Principal</option>
                    <option value="admin">Administrator</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="it-manager">IT Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className={labelClass} htmlFor="fname">First Name</label>
                    <input className={inputClass} type="text" id="fname" placeholder="First name" required />
                  </div>
                  <div className="grid gap-2">
                    <label className={labelClass} htmlFor="lname">Last Name</label>
                    <input className={inputClass} type="text" id="lname" placeholder="Last name" required />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className={labelClass} htmlFor="email">Email Address</label>
                    <input className={inputClass} type="email" id="email" placeholder="your@email.com" required />
                  </div>
                  <div className="grid gap-2">
                    <label className={labelClass} htmlFor="phone">Phone Number</label>
                    <input className={inputClass} type="tel" id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <fieldset className="grid gap-3">
                  <legend className={labelClass}>What are you most interested in?</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                        <input type="checkbox" name="interest" value={interest.toLowerCase().replace(/\s+/g, '-')} className="h-4 w-4 accent-blue-600" />
                        {interest}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="grid gap-2">
                  <label className={labelClass} htmlFor="message">Additional Information</label>
                  <textarea className={`${inputClass} min-h-28 py-4`} id="message" placeholder="Tell us about your institution..." />
                </div>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-slate-950">
                  Schedule Demo
                </button>
              </form>
            </section>

            <aside className="grid content-start gap-6">
              <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
                <h2 className="text-2xl font-black text-slate-950">What You'll Learn</h2>
                <div className="mt-6 grid gap-4">
                  {learnItems.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section className="grid gap-4">
                {demoInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-slate-950">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </section>
            </aside>
          </div>
        </PageSection>
      </PageMain>
    </SiteShell>
  );
}

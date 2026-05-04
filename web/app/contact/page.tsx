import { Clock, Mail, MapPin, MessageSquare, Phone, Send, Video } from 'lucide-react';
import Link from 'next/link';
import SiteShell from '../components/SiteShell';
import { FeatureCard, inputClass, labelClass, PageHero, PageMain, PageSection, SectionHeader } from '../components/MarketingSections';

const contactItems = [
  { title: 'Phone', value: '+91 8905483183', note: 'Mon-Fri, 9AM-6PM IST', icon: Phone },
  { title: 'Email', value: 'support@prasynx.com', note: 'sales@prasynx.com', icon: Mail },
  { title: 'Address', value: 'Chandigarh, India', note: 'Global operations in 15+ countries', icon: MapPin },
  { title: 'Business Hours', value: 'Monday - Friday: 9:00 AM - 6:00 PM IST', note: 'Weekend support: 10:00 AM - 4:00 PM IST', icon: Clock }
];

const supportOptions = [
  { title: 'Live Chat', description: 'Chat with our support team in real time.', icon: MessageSquare, action: 'Start Chat', href: '#' },
  { title: 'Book a Demo', description: 'Schedule a personalized product walkthrough.', icon: Video, action: 'Book Now', href: '/book-demo' },
  { title: 'Help Center', description: 'Browse documentation and support resources.', icon: Mail, action: 'Explore', href: '/resources' }
];

export default function Contact() {
  return (
    <SiteShell>
      <PageMain>
        <PageHero
          eyebrow="Contact"
          title="Talk to the Prasynx Team"
          description="Send a message, ask about implementation, or book support for your institution."
        />

        <PageSection>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <SectionHeader align="left" title="Send Us a Message" description="Share a few details and our team will follow up." />
              <form className="grid gap-5">
                {[
                  { id: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text', required: true },
                  { id: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email', required: true },
                  { id: 'organization', label: 'Organization', placeholder: 'Your institution', type: 'text' },
                  { id: 'subject', label: 'Subject', placeholder: 'How can we help?', type: 'text', required: true }
                ].map((field) => (
                  <div key={field.id} className="grid gap-2">
                    <label className={labelClass} htmlFor={field.id}>{field.label}</label>
                    <input className={inputClass} id={field.id} type={field.type} placeholder={field.placeholder} required={field.required} />
                  </div>
                ))}
                <div className="grid gap-2">
                  <label className={labelClass} htmlFor="message">Message</label>
                  <textarea className={`${inputClass} min-h-36 py-4`} id="message" placeholder="Your message here..." />
                </div>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-slate-950">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </section>

            <section className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm font-bold text-slate-700">{item.value}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                    </div>
                  </article>
                );
              })}
            </section>
          </div>
        </PageSection>

        <PageSection tone="soft">
          <SectionHeader eyebrow="Support" title="Other Ways to Connect" />
          <div className="grid gap-6 md:grid-cols-3">
            {supportOptions.map((option) => (
              <FeatureCard key={option.title} icon={option.icon} title={option.title} description={option.description}>
                <Link href={option.href} className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  {option.action}
                </Link>
              </FeatureCard>
            ))}
          </div>
        </PageSection>
      </PageMain>
    </SiteShell>
  );
}

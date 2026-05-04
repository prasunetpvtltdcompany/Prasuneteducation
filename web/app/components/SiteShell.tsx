'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronDown,
  Cloud,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Share2,
  Sparkles,
  Users,
  X
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/solutions',
    label: 'Solutions',
    menu: [
      { href: '/solutions', label: 'Student Management', description: 'Attendance, grades, records, and progress tracking.', icon: BookOpen },
      { href: '/solutions', label: 'Parent Engagement', description: 'Updates, alerts, events, and communication tools.', icon: Users },
      { href: '/solutions', label: 'Staff Management', description: 'Attendance, leave, payroll, and performance workflows.', icon: GraduationCap },
      { href: '/solutions', label: 'Analytics & Reporting', description: 'Dashboards, exports, trend analysis, and insights.', icon: BarChart3 }
    ]
  },
  {
    href: '/platform',
    label: 'Platform',
    menu: [
      { href: '/platform', label: 'Cloud Infrastructure', description: 'Secure access from anywhere with scalable foundations.', icon: Cloud },
      { href: '/platform', label: 'Enterprise Security', description: 'Permissions, privacy controls, encryption, and audits.', icon: Sparkles },
      { href: '/platform', label: 'Integrations', description: 'API-first connections for existing education systems.', icon: Layers },
      { href: '/platform', label: 'Mobile First', description: 'Clean workflows across phones, tablets, and desktops.', icon: Phone }
    ]
  },
  { href: '/customers', label: 'Customers' },
  {
    href: '/resources',
    label: 'Resources',
    menu: [
      { href: '/resources', label: 'Documentation', description: 'Guides, manuals, API references, and FAQs.', icon: FileText },
      { href: '/resources', label: 'Learning Resources', description: 'Best practices, webinars, and case studies.', icon: BookOpen },
      { href: '/resources', label: 'Support Center', description: 'Tickets, community help, and support channels.', icon: MessageCircle },
      { href: '/resources', label: 'Downloads', description: 'Templates, white papers, and client resources.', icon: ArrowRight }
    ]
  },
  { href: '/contact', label: 'Contact' }
];

const footerSections = [
  {
    title: 'Quick Links',
    items: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/contact', label: 'Contact' },
      { href: '/careers', label: 'Careers' },
      { href: '/resources', label: 'Resources' }
    ]
  },
  {
    title: 'Services',
    items: [
      { href: '/solutions', label: 'Student Portal' },
      { href: '/solutions', label: 'Parent Portal' },
      { href: '/solutions', label: 'Staff Portal' },
      { href: '/solutions', label: 'Admin Portal' },
      { href: '/solutions', label: 'Management Dashboard' },
      { href: '/solutions', label: 'Analytics & Reporting' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { href: '/resources', label: 'Help Center' },
      { href: '/resources', label: 'Documentation' },
      { href: '/resources', label: 'API Reference' },
      { href: '/customers', label: 'Case Studies' },
      { href: '/resources', label: 'FAQs' },
      { href: '/resources', label: 'Branding Guidelines' }
    ]
  },
  {
    title: 'Business',
    items: [
      { href: '/customers', label: 'Clientele' },
      { href: '/contact', label: 'Partner With Us' },
      { href: '/customers', label: 'Partners' },
      { href: '/customers', label: 'Testimonials' },
      { href: '/careers', label: 'Life at Prasynx' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/sitemap', label: 'Sitemap' },
      { href: '/terms', label: 'Compliance' }
    ]
  },
  {
    title: 'Support',
    items: [
      { href: '/contact', label: 'Contact Support' },
      { href: '/', label: 'System Status' },
      { href: '/platform', label: 'Security' }
    ]
  }
];

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fafafa_0%,#f8f5f5_55%,#fef0f0_100%)] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/80 to-transparent" />
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" onClick={closeMenu} className="group flex min-w-0 items-center gap-3">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-blue-600 via-cyan-500 to-emerald-400 text-white shadow-[0_18px_40px_rgba(37,99,235,0.25)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_55px_rgba(20,184,166,0.28)]">
              <span className="absolute inset-0 rounded-2xl bg-cyan-300/30 blur-sm" />
              <GraduationCap className="relative h-6 w-6" />
            </span>
            <div className="min-w-0">
              <div className="text-lg font-extrabold leading-tight text-slate-950">Prasynx</div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-slate-500">
                <Sparkles className="h-3 w-3 text-cyan-500" />
                Education OS
              </div>
            </div>
          </Link>

          <nav className="hidden items-center rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-inner shadow-slate-200/60 lg:flex">
            {navLinks.map((link) => {
              const hasMenu = Boolean(link.menu?.length);
              const active = pathname === link.href;

              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition duration-300 ${
                      active
                        ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                        : 'text-slate-600 hover:bg-blue-50 hover:text-slate-950'
                    }`}
                  >
                    {link.label}
                    {hasMenu ? <ChevronDown className="h-3.5 w-3.5 transition duration-300 group-hover:rotate-180" /> : null}
                  </Link>

                  {hasMenu ? (
                    <div className="invisible absolute left-1/2 top-full z-50 w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-4 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
                        <div className="grid gap-2 md:grid-cols-2">
                          {link.menu?.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="group/item flex gap-4 rounded-3xl p-4 text-left transition duration-200 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                              >
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-blue-600 transition duration-200 group-hover/item:bg-blue-600 group-hover/item:text-white">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-black text-slate-950">{item.label}</span>
                                  <span className="mt-1 block text-xs font-semibold leading-5 text-slate-500">{item.description}</span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/book-demo"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Book Demo
            </Link>
            <Link
              href="/#portals"
              className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 via-cyan-500 to-emerald-400 px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(20,184,166,0.28)]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-blue-50 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`grid border-t border-slate-200/70 bg-white/95 px-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen ? 'grid-rows-[1fr] py-4 opacity-100' : 'grid-rows-[0fr] py-0 opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <div key={link.href} className="rounded-2xl bg-slate-50">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition ${
                      pathname === link.href
                        ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {link.label}
                    {link.menu?.length ? <ChevronDown className="h-4 w-4" /> : null}
                  </Link>

                  {link.menu?.length ? (
                    <div className="grid gap-1 px-2 pb-2">
                      {link.menu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenu}
                          className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-white hover:text-blue-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="/book-demo"
                onClick={closeMenu}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-extrabold text-slate-800"
              >
                Book Demo
              </Link>
              <Link
                href="/#portals"
                onClick={closeMenu}
                className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-600/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="relative overflow-hidden bg-slate-950 px-4 py-14 text-slate-100 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-size-[34px_34px] opacity-20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-600">
                <span className="absolute inset-0 rounded-2xl bg-cyan-300/40 blur-md" />
                <GraduationCap className="relative h-6 w-6" />
              </span>
              <div>
                <div className="text-lg font-extrabold">Prasynx</div>
                <div className="text-sm font-semibold text-cyan-200">Education OS</div>
              </div>
            </Link>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Empowering educational institutions with modern, secure, and efficient management solutions. Prasynx streamlines operations, enhances learning experiences, and strengthens the full learning community.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '#', label: 'Share', icon: Share2 },
                { href: '#', label: 'Message', icon: MessageCircle },
                { href: '#', label: 'Community', icon: Users }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/15 hover:text-cyan-100"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerSections.slice(0, 4).map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-extrabold uppercase text-white">{section.title}</h3>
                <div className="grid gap-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-slate-400 transition hover:translate-x-1 hover:text-cyan-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-7xl gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Phone, label: '+91 8905483183' },
              { icon: Mail, label: 'prasunetcompany@gmail.com' },
              { icon: MapPin, label: 'Chandigarh, India' }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Icon className="h-5 w-5 shrink-0 text-cyan-200" />
                  <span className="min-w-0 wrap-break-word text-sm font-semibold text-slate-300">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-blue-950/20 backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-white">Stay Updated</h3>
                <p className="mt-1 text-sm text-slate-300">Get product updates and education-tech insights.</p>
              </div>
              <Sparkles className="h-5 w-5 shrink-0 text-cyan-200" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-slate-950/50 px-5 text-sm font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/80 focus:ring-4 focus:ring-cyan-300/10"
              />
              <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Prasynx. All rights reserved. Designed for educational excellence.</p>
          <p className="font-semibold text-slate-300">Powered by Prasunet.</p>
        </div>
      </footer>
    </div>
  );
}

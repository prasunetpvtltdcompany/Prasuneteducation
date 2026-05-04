import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  metrics?: Array<{ value: string; label: string }>;
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'soft' | 'dark';
};

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
};

type CtaBandProps = {
  title: string;
  description: string;
  href: string;
  action: string;
};

export function PageMain({ children }: { children: ReactNode }) {
  return <main className="flex min-h-screen flex-col">{children}</main>;
}

export function PageHero({ eyebrow, title, description, metrics }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-176 -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.14)_1px,transparent_0)] bg-size-[36px_36px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-extrabold text-blue-700 shadow-sm">
          <Sparkles className="h-4 w-4 text-cyan-500" />
          {eyebrow}
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>

        {metrics ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-xl shadow-slate-900/5 backdrop-blur">
                <div className="text-3xl font-black text-slate-950">{metric.value}</div>
                <div className="mt-1 text-sm font-bold text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function PageSection({ children, className = '', tone = 'default' }: SectionProps) {
  const toneClass =
    tone === 'soft'
      ? 'bg-white/55'
      : tone === 'dark'
      ? 'bg-slate-950 text-white'
      : 'bg-transparent';

  return (
    <section className={`${toneClass} px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="mb-3 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-extrabold text-blue-700">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

export function FeatureCard({ icon: Icon, title, description, children }: FeatureCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-105 group-hover:bg-slate-950 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}

export function CtaBand({ title, description, href, action }: CtaBandProps) {
  return (
    <PageSection className="pt-6">
      <div className="relative overflow-hidden rounded-4xl bg-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-white"
          >
            {action} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageSection>
  );
}

export const inputClass =
  'min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100';

export const labelClass = 'text-sm font-extrabold text-slate-800';

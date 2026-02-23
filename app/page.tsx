import type { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/Motion';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Powering industries with turnkey electrical and instrumentation excellence.',
};

const expertise = [
  'Extra High Voltage Engineering',
  'HV & LV Power Distribution',
  'ELV Network & Process Instrumentation',
  'PLC / SCADA / BMS Systems',
  'LV Control Panels up to 6300A',
  'MV VCB Panels up to 36kV',
];

const industries = ['Pharmaceuticals', 'Automotive', 'Chemicals', 'FMCG', 'Petrochemicals', 'Infrastructure', 'Hospitals', 'Packaging', 'Hospitality'];

const usps = [
  'When we commit, we deliver',
  'Strict timeline adherence',
  'Design support',
  'After-sales service',
  'EHS commitment',
  'In-house manufacturing',
];

const clients = ['Kia Motors', 'ONGC', 'ITC', 'Dabur', 'Capgemini', 'Mangalore Refinery', 'D-Mart', 'Huhtamaki'];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Epoch Electric Pvt. Ltd.',
    foundingDate: '2010',
    address: { '@type': 'PostalAddress', addressLocality: 'Navi Mumbai', addressCountry: 'India' },
    url: 'https://www.epochelectric.in',
  };

  return (
    <PageLayout>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6">
        <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 -z-10 grid-overlay" />
        <div className="mx-auto max-w-6xl py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-electric">ISO-Certified E&I Engineering Partner</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Powering Industries. Engineering Excellence.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Turnkey Electrical & Instrumentation Solutions from 220kV to 230V</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-md bg-electric px-6 py-3 font-semibold text-white transition hover:scale-105">Explore Projects</Link>
            <Link href="/contact" className="rounded-md border border-white/20 px-6 py-3 font-semibold hover:border-electric hover:text-electric">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-4">
        {[
          { label: 'Years Experience', value: 15 },
          { label: 'Major Clients', value: 30 },
          { label: 'Industries Served', value: 12 },
          { label: 'Projects Delivered', value: 100 },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-6 text-center">
            <AnimatedCounter value={stat.value} />
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <h2 className="text-3xl font-semibold">About Snapshot</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Established in 2010, Epoch Electric Pvt. Ltd. is an ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified organization with a collaborative venture with Eaton India, headquartered in Navi Mumbai.</p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Our Expertise</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {expertise.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <div className="glass h-full rounded-xl p-5 transition hover:-translate-y-1 hover:border-electric/80">
                <p className="font-medium">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Industries Served</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry} delay={i * 0.05}>
              <div className="glass rounded-xl p-6">
                <p className="text-lg">{industry}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Our USP</h2>
        <div className="relative mt-8 space-y-6 border-l border-electric/50 pl-6">
          {usps.map((item, i) => (
            <FadeIn key={item} delay={i * 0.08}>
              <div className="relative rounded-lg glass p-4 before:absolute before:-left-[31px] before:top-5 before:h-3 before:w-3 before:rounded-full before:bg-electric">
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="overflow-hidden py-16">
        <h2 className="mx-auto max-w-6xl px-6 text-3xl font-semibold">Trusted Clients</h2>
        <div className="mt-8 whitespace-nowrap">
          <div className="inline-flex min-w-full animate-marquee gap-10 px-6">
            {[...clients, ...clients].map((c, i) => (
              <span key={`${c}-${i}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto my-16 max-w-6xl rounded-2xl border border-electric/30 bg-gradient-to-r from-[#07255a] to-[#1f2f46] p-10 text-center">
        <h2 className="text-3xl font-semibold">Let’s Engineer the Future Together</h2>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-electric px-6 py-3 font-semibold">Go to Contact</Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </PageLayout>
  );
}

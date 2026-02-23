import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Epoch Electric, its philosophy, collaborations, and memberships.',
};

export default function AboutPage() {
  const epoch = [
    ['E', 'Ethical Business'],
    ['P', 'Providing Impeccable Services'],
    ['O', 'Obtain Market Leadership'],
    ['C', 'Customer Satisfaction'],
    ['H', 'Humanity with Integrity'],
  ];

  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h1 className="text-4xl font-bold">About Epoch Electric Pvt. Ltd.</h1>
          <p className="mt-6 max-w-4xl text-slate-300">Established in 2010 in Mumbai, Epoch Electric delivers turnkey Electrical & Instrumentation engineering from 220kV to 230V. We manufacture IEC 61439 compliant LV and MV panels while maintaining world-class quality through ISO certifications and process discipline.</p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-3xl font-semibold">Business Philosophy – EPOCH</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {epoch.map(([letter, meaning], i) => (
            <FadeIn key={letter} delay={i * 0.08}>
              <article className="glass h-full rounded-xl p-5 text-center">
                <p className="text-4xl font-bold text-electric">{letter}</p>
                <p className="mt-3 text-sm text-slate-300">{meaning}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-8 md:grid-cols-2">
        <FadeIn>
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-semibold">Our Collaborations</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-300">
              <li>Eaton Power Quality Pvt. Ltd.</li>
              <li>Luker Electric Technologies Pvt. Ltd.</li>
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-semibold">Memberships</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-300">
              <li>Bombay Chamber of Commerce</li>
              <li>India SME Forum</li>
              <li>CII</li>
              <li>National Safety Council</li>
              <li>Electrical Contractors Association</li>
            </ul>
          </div>
        </FadeIn>
      </section>
    </PageLayout>
  );
}

import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/Motion';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build your career with Epoch Electric through impactful projects and growth opportunities.',
};

const roles = ['Electrical Engineer', 'Project Manager', 'Design Engineer', 'Site Supervisor', 'Panel Technician'];

export default function CareersPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Build Your Career With Power</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {['Large-scale industrial projects', 'Learning opportunities', 'EHS culture', 'Professional growth', 'Engineering excellence'].map((point, i) => (
            <FadeIn key={point} delay={i * 0.05}>
              <div className="glass rounded-xl p-4 text-center text-sm">{point}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 grid gap-8 md:grid-cols-2">
        <div className="glass rounded-xl p-6">
          <h2 className="text-2xl font-semibold">Open Positions</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {roles.map((role) => (
              <li key={role} className="rounded-md border border-white/10 p-3 hover:border-electric">{role}</li>
            ))}
          </ul>
        </div>

        <form className="glass rounded-xl p-6">
          <h2 className="text-2xl font-semibold">Apply Now</h2>
          <div className="mt-4 grid gap-3">
            {['Name', 'Email', 'Phone', 'Position Applying'].map((field) => (
              <input key={field} aria-label={field} placeholder={field} className="rounded-md border border-white/15 bg-transparent px-4 py-2 transition focus:border-electric focus:outline-none" />
            ))}
            <input type="file" aria-label="Upload Resume" className="rounded-md border border-white/15 bg-transparent px-4 py-2 file:mr-3 file:rounded file:border-0 file:bg-electric file:px-3 file:py-1" />
            <textarea aria-label="Message" placeholder="Message" rows={4} className="rounded-md border border-white/15 bg-transparent px-4 py-2 transition focus:border-electric focus:outline-none" />
            <button type="button" className="rounded-md bg-electric px-5 py-2 font-semibold text-white transition hover:scale-[1.02]">Submit Application</button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}

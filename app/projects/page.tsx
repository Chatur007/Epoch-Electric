'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/Motion';


const categories = ['All', 'Electrical Turnkey', 'Instrumentation', 'LV Panels', 'MV Panels', 'Infrastructure Projects'];

const projects = [
  { title: 'Substation Integration', category: 'Electrical Turnkey', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1100&q=80' },
  { title: 'Plant Instrumentation Upgrade', category: 'Instrumentation', img: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1100&q=80' },
  { title: 'IEC 61439 LV Panel Batch', category: 'LV Panels', img: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=1100&q=80' },
  { title: '36kV VCB Panel Installation', category: 'MV Panels', img: 'https://images.unsplash.com/photo-1562141961-b5d159a71f00?auto=format&fit=crop&w=1100&q=80' },
  { title: 'Infrastructure Grid Upgrade', category: 'Infrastructure Projects', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=80' },
  { title: 'Control Room Commissioning', category: 'Electrical Turnkey', img: 'https://images.unsplash.com/photo-1581092160614-7f31f0ddbe14?auto=format&fit=crop&w=1100&q=80' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Engineering Excellence in Action</h1>
        <p className="mt-4 text-slate-300">Visual portfolio of turnkey execution across power systems and instrumentation engineering.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full px-4 py-2 text-sm transition ${filter === cat ? 'bg-electric text-white' : 'border border-white/20 hover:border-electric'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.05}>
              <button onClick={() => setLightbox(project.img)} className="group relative w-full overflow-hidden rounded-xl border border-white/10 text-left">
                <Image src={project.img} alt={project.title} width={500} height={320} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                  <div>
                    <p className="font-semibold">{project.title}</p>
                    <p className="text-xs text-electric">{project.category}</p>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-5">
        {['Substations', 'Industrial plants', 'Control rooms', 'Panel manufacturing', 'Infrastructure projects'].map((item, i) => (
          <FadeIn key={item} delay={i * 0.06}>
            <div className="glass rounded-xl p-4 text-center">{item}</div>
          </FadeIn>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-semibold">Appreciation</h3>
            <p className="mt-3 text-slate-300">Received formal appreciation from Adlabs Imagica for quality execution and timeline discipline.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass rounded-xl p-6">
            <h3 className="text-2xl font-semibold">Awards</h3>
            <p className="mt-3 text-slate-300">Recognized by the Chairman for engineering leadership and sustained project delivery excellence.</p>
          </div>
        </FadeIn>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6" onClick={() => setLightbox(null)}>
          <Image src={lightbox} alt="Project preview" width={1200} height={800} className="max-h-[85vh] w-auto rounded-lg object-contain" />
        </div>
      )}
    </PageLayout>
  );
}

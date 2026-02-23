'use client';

import { motion } from 'framer-motion';
import { FadeIn, TiltCard } from '@/components/Motion';

const expertise = [
  {
    title: 'Extra High Voltage Systems',
    description: 'Substations and power distribution up to 220kV with precision engineering.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'LV & MV Control Panels',
    description: 'IEC 61439 compliant panels up to 6300A (LV) and 36kV VCB panels (MV).',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'PLC | SCADA | BMS',
    description: 'Intelligent automation and building management systems for smart operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'ELV & Automation',
    description: 'Extra-low voltage systems and process automation solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Turnkey Electrical Solutions',
    description: 'Complete end-to-end project execution from design to commissioning.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Instrumentation Engineering',
    description: 'Precision process instrumentation for industrial applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ExpertiseSection() {
  return (
    <section className="relative py-32 bg-ivory overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
              Our Expertise
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-dark">
              Comprehensive Engineering Solutions
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-slate-light max-w-2xl mx-auto">
              From high-voltage substations to precision automation systems, 
              we deliver excellence across the power spectrum.
            </p>
          </FadeIn>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="luxury-card h-full group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-slate-dark group-hover:bg-champagne group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-slate-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-light leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Hover Underline */}
                  <div className="mt-6 h-0.5 bg-champagne w-0 group-hover:w-16 transition-all duration-500" />
                </motion.div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

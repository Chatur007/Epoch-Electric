'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/Motion';

const industries = [
  {
    name: 'Pharmaceuticals',
    description: 'Clean room compliant electrical systems with precision controls for pharmaceutical manufacturing.',
    icon: '💊',
  },
  {
    name: 'Automotive',
    description: 'High-capacity power distribution and automation systems for automotive plants.',
    icon: '🚗',
  },
  {
    name: 'Petrochemicals',
    description: 'Hazardous area electrical installations with intrinsic safety systems.',
    icon: '⚗️',
  },
  {
    name: 'Infrastructure',
    description: 'Large-scale power infrastructure for commercial and residential developments.',
    icon: '🏗️',
  },
  {
    name: 'FMCG',
    description: 'Efficient power systems for fast-moving consumer goods manufacturing.',
    icon: '📦',
  },
  {
    name: 'Healthcare',
    description: 'Critical power systems with backup solutions for hospitals and medical facilities.',
    icon: '🏥',
  },
];

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-slate-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-overlay" style={{ filter: 'invert(1)' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
              Industries We Serve
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-white">
              Powering Diverse Sectors
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering 
              customized electrical solutions for unique sector requirements.
            </p>
          </FadeIn>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.1}>
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                <div className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-champagne/50 group-hover:bg-white/10">
                  {/* Icon */}
                  <span className="text-4xl mb-6 block">{industry.icon}</span>
                  
                  {/* Name */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {industry.name}
                  </h3>
                  
                  {/* Description */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/60 text-sm leading-relaxed"
                      >
                        {industry.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  
                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-champagne to-champagne/50 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Industries */}
        <FadeIn delay={0.6}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Chemicals', 'Packaging', 'Hospitality', 'Data Centers', 'Textiles', 'Food Processing'].map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 border border-white/20 text-white/60 text-sm hover:border-champagne hover:text-champagne transition-all duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/Motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const industries = [
  {
    name: 'Pharmaceuticals',
    description: 'Clean room compliant electrical systems with precision controls for pharmaceutical manufacturing.',
    image: '/images/industries/pharmaceuticals.png',
  },
  {
    name: 'Automotive',
    description: 'High-capacity power distribution and automation systems for automotive plants.',
    image: '/images/industries/automotive.png',
  },
  {
    name: 'Petrochemicals',
    description: 'Hazardous area electrical installations with intrinsic safety systems.',
    image: '/images/industries/petrochemicals.png',
  },
  {
    name: 'Infrastructure',
    description: 'Large-scale power infrastructure for commercial and residential developments.',
    image: '/images/industries/infrastructure.png',
  },
  {
    name: 'FMCG',
    description: 'Efficient power systems for fast-moving consumer goods manufacturing.',
    image: '/images/industries/fmcg.png',
  },
  {
    name: 'Healthcare',
    description: 'Critical power systems with backup solutions for hospitals and medical facilities.',
    image: '/images/industries/healthcare.png',
  },
];

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.industry-card');
    if (!cards.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=3000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: 'power4.inOut' },
    });

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      tl.to(card as HTMLElement, {
        rotateX: 180,
        rotateY: 270,
        x: '200%',
        opacity: 0,
        transformOrigin: 'center center',
        zIndex: cards.length - i,
        duration:2,
      }, i);
    });

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-slate-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-overlay" style={{ filter: 'invert(1)' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
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

        {/* Industries Stack Animation Container */}
        <div className="relative w-full min-h-[420px] md:min-h-[500px] lg:min-h-[600px]" style={{ perspective: 1200 }}>
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.1}>
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="industry-card absolute top-0 left-0 w-full h-full flex items-center justify-center group cursor-pointer"
                data-hover
                style={{ zIndex: industries.length - index }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-slate-900" />
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-white/90 text-base drop-shadow-md">
                      {industry.description}
                    </p>
                  </div>
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

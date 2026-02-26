'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn } from '@/components/Motion';
import { motion } from 'framer-motion';
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

const leftTags = [
  { label: 'Pharmaceuticals', index: 0 },
  { label: 'Automotive', index: 1 },
  { label: 'Petrochemicals', index: 2 },
];

const rightTags = [
  { label: 'Infrastructure', index: 3 },
  { label: 'FMCG', index: 4 },
  { label: 'Healthcare', index: 5 },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.industry-card');
    if (!cards.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=3000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const segment = 1 / cards.length;
          const newIndex = Math.min(
            cards.length - 1,
            Math.floor(progress / segment)
          );
          setActiveIndex(newIndex);
        },
      },
    });

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      tl.to(
        card,
        {
          rotateX: 180,
          rotateY: 270,
          x: "200%",
          opacity: 0,
          duration: 1,
          transformOrigin: 'center center',
        },
        i * 1
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  const tagClass = (active: boolean) =>
    `px-5 py-2 rounded-full border transition-all duration-400 ease-in-out text-base mb-4
    ${
      active
        ? 'bg-[#0B3C6D] text-white shadow-[0_0_20px_rgba(244,123,32,0.4)] scale-105 border-[#0B3C6D] opacity-100'
        : 'bg-white text-[#0B3C6D] border border-[rgba(11,60,109,0.2)] opacity-40'
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-dark"
    >
      {/* HEADER */}
      <div className="text-center mb-20 px-6">
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

      {/* CARD + TAG WRAPPER */}
 <div className="relative w-full flex items-center justify-center">
  
  {/* LEFT TAGS */}
  <div className="hidden lg:flex flex-col gap-4 items-end justify-center absolute left-6 top-1/2 -translate-y-1/2 z-30">
    {leftTags.map((tag) => (
      <div key={tag.label} className={tagClass(activeIndex === tag.index)}>
        {tag.label}
      </div>
    ))}
  </div>

  {/* CENTERED CARD CONTAINER */}
  <div className="relative w-full max-w-7xl mx-auto px-6"
      >
    
    <div className="relative min-h-[420px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center" style={{ perspective: 1200 }}>
      {industries.map((industry, index) => (
        <motion.div
          key={industry.name}
          className="industry-card absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ zIndex: industries.length - index }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-white/90 text-base">
                {industry.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* RIGHT TAGS */}
  <div className="hidden lg:flex flex-col gap-4 items-start justify-center absolute right-6 top-1/2 -translate-y-1/2 z-30">
    {rightTags.map((tag) => (
      <div key={tag.label} className={tagClass(activeIndex === tag.index)}>
        {tag.label}
      </div>
    ))}
  </div>

</div>
    </section>
  );
}
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, SplitText, MagneticButton } from '@/components/Motion';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-dark">
      {/* Background Image with Parallax */}
      <motion.video 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
       src="/videos/industrial-power.mp4" // <-- update with your video path
  autoPlay
  loop
  muted
  playsInline
  style={{ y: backgroundY }}
      />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-slate-dark/80" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      <ParticlesBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/60 via-transparent to-slate-dark/70" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-champagne/10 to-transparent" />
      
      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32 lg:py-40"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-champagne/40 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              ISO-Certified Engineering Excellence
            </span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.2] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block whitespace-nowrap leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.3] "
            >
              Engineering Power.
            </motion.span>
            <br className="hidden sm:block"/>
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block leading-[1.4] sm:leading-[1.3] md:leading-[1.2] lg:leading-[1.3] "
            >
              Delivering{' '}
              <span className="text-champagne">Precision.</span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-center"
          >
            Turnkey Electrical & Instrumentation Solutions for Industry Leaders. 
            From 220kV substations to precision control systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-12 flex flex-wrap gap-4 "
          >
            <MagneticButton>
              <Link 
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-medium tracking-wide transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                Explore Our Work
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-medium tracking-wide transition-all duration-500 hover:border-transparent hover:bg-accent"
              >
                Request Consultation
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-12 bg-primary/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, MagneticButton } from '@/components/Motion';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-ivory overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-6">
            Ready to Start?
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-dark leading-tight">
            Let's Build the Future of<br />
            <span className="text-champagne">Infrastructure Together</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg text-slate-light max-w-2xl mx-auto leading-relaxed">
            Partner with Epoch Electric for world-class electrical and instrumentation 
            solutions. Our team of experts is ready to transform your vision into reality.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-champagne text-white font-medium tracking-wide transition-all duration-500 hover:bg-slate-dark hover:shadow-luxury-lg"
              >
                Start Your Project
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
                href="tel:+912240001234"
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-slate-dark/20 text-slate-dark font-medium tracking-wide transition-all duration-500 hover:border-champagne hover:text-champagne"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>

        {/* Trust Indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-light">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              ISO Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              30+ Major Clients
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

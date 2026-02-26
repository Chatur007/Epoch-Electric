'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, Parallax, ImageReveal } from '@/components/Motion';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { label: 'Years Excellence', value: 15 },
  { label: 'Major Clients', value: 30 },
  { label: 'Industries Served', value: 12 },
  { label: 'Projects Delivered', value: 100 },
];

export default function AboutPreview() {
  return (
    <section  className="relative py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center lg:text-left ">
                <AnimatedCounter value={stat.value} />
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-slate-light">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
{/* https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80 */}
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative w-full">
            <Parallax offset={30}>
              <ImageReveal direction="left">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/images/About/About_us.jpg"
                    alt="Epoch Electric Engineering Excellence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/30 to-transparent z-10" />
                </div>
              </ImageReveal>
            </Parallax>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 lg:-right-16 bg-white p-8 shadow-luxury-lg max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-dark">ISO Certified</p>
                  <p className="text-xs text-slate-light">9001 • 14001 • 45001</p>
                </div>
              </div>
              <p className="text-sm text-slate-light leading-relaxed">
                Triple certified for quality, environment, and occupational health & safety management.
              </p>
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <FadeIn>
              <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
                About Epoch Electric
              </p>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-dark leading-tight">
                Building Tomorrow's Infrastructure, Today
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-slate-light leading-relaxed">
                Established in 2010, Epoch Electric Pvt. Ltd. is an ISO 9001:2015, 
                ISO 14001:2015 and ISO 45001:2018 certified organization delivering 
                turnkey Electrical & Instrumentation solutions.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="mt-4 text-lg text-slate-light leading-relaxed">
                As a collaborative venture with Eaton India and headquartered in 
                Navi Mumbai, we specialize in complete power solutions from 220kV 
                to 230V across diverse industrial sectors.
              </p>
            </FadeIn>

            {/* Features */}
            <FadeIn delay={0.4}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  'Eaton Collaboration',
                  '220kV to 230V Range',
                  'In-house Manufacturing',
                  'Design Support',
                ].map((feature, i) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
                    <span className="text-sm text-slate-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.5}>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-[0.15em] font-medium text-slate-dark gold-underline"
              >
                Learn Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

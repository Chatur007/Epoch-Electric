'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/Motion';

const expertise = [
  {
    title: 'Extra High Voltage Systems',
    description: 'Substations and power distribution up to 220kV with precision engineering. Our EHV solutions ensure reliable power transmission across industrial complexes.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    layout: 'text-top',
  },
  {
    title: 'LV & MV Control Panels',
    description: 'IEC 61439 compliant panels up to 6300A (LV) and 36kV VCB panels (MV).',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    layout: 'image-only',
  },
  {
    title: 'PLC | SCADA | BMS',
    description: 'Intelligent automation and building management systems for smart operations. Real-time control and monitoring solutions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    layout: 'text-top',
  },
  {
    title: 'Smart IoT Monitoring',
    description: 'Real-time monitoring and remote management keep you connected to your power source.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    layout: 'image-top',
  },
  {
    title: 'Turnkey Electrical Solutions',
    description: 'Complete end-to-end project execution from design to commissioning. We handle everything so you can focus on your core business.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
    layout: 'text-only',
  },
  {
    title: 'Instrumentation Engineering',
    description: 'Precision process instrumentation for industrial applications with advanced calibration systems.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    layout: 'image-top',
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
            <p className="text-lg uppercase tracking-[0.2em] text-secondary mb-4">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1 */}
          {/* Card 1 - Text Top, Image Bottom */}
          <FadeIn delay={0.1}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[0].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed">
                  {expertise[0].description}
                </p>
              </div>
              <div className="relative h-48 w-full">
                <Image
                  src={expertise[0].image}
                  alt={expertise[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 2 - Image Top with Description */}
          <FadeIn delay={0.15}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full cursor-pointer flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={expertise[1].image}
                  alt={expertise[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[1].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed">
                  {expertise[1].description}
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 3 - Text Top, Image Bottom */}
          <FadeIn delay={0.2}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[2].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed">
                  {expertise[2].description}
                </p>
              </div>
              <div className="relative h-48 w-full">
                <Image
                  src={expertise[2].image}
                  alt={expertise[2].title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </FadeIn>

          {/* Row 2 */}
          {/* Card 4 - Image Top, Text Bottom */}
          <FadeIn delay={0.25}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={expertise[3].image}
                  alt={expertise[3].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[3].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed">
                  {expertise[3].description}
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 5 - Text Top with Image */}
          <FadeIn delay={0.3}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[4].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed mb-4">
                  {expertise[4].description}
                </p>
              </div>
              <div className="relative h-40 w-full">
                <Image
                  src={expertise[4].image}
                  alt={expertise[4].title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 6 - Image Top, Text Bottom */}
          <FadeIn delay={0.35}>
            <motion.div
              data-hover
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={expertise[5].image}
                  alt={expertise[5].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-slate-dark mb-3">
                  {expertise[5].title}
                </h3>
                <p className="text-slate-light text-sm leading-relaxed">
                  {expertise[5].description}
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

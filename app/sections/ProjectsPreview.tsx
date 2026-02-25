'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, MagneticButton } from '@/components/Motion';

const projects = [
  {
    title: 'Substation Integration',
    category: '220kV Power Systems',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Industrial Plant Automation',
    category: 'PLC & SCADA Systems',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Control Room Commissioning',
    category: 'Turnkey Solutions',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Panel Manufacturing',
    category: 'LV & MV Panels',
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function ProjectsPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <FadeIn>
              <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
                Featured Projects
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-slate-dark">
                Engineering Excellence<br />in Action
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <MagneticButton>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-slate-dark gold-underline"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </div>

      {/* Horizontal Scroll Projects */}
      <div ref={containerRef} className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-8 pl-6 lg:pl-12"
        >
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <Link href="/projects" className="group block">
                <div className="relative w-[350px] md:w-[450px] lg:w-[550px] aspect-[4/3] overflow-hidden">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/20" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-serif font-semibold text-white">
                      {project.title}
                    </h3>
                    
                    {/* Gold line animation */}
                    <div className="mt-4 h-0.5 bg-champagne w-0 group-hover:w-24 transition-all duration-500" />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-champagne/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </FadeIn>
          ))}
          
          {/* View More Card */}
          <FadeIn delay={0.4}>
            <Link href="/projects" className="group block">
              <div className="w-[280px] md:w-[350px] aspect-[4/3] bg-slate-dark flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-champagne flex items-center justify-center group-hover:bg-champagne transition-all duration-500">
                    <svg 
                      className="w-6 h-6 text-champagne group-hover:text-white transition-colors duration-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">View All Projects</p>
                  <p className="text-white/50 text-sm mt-2">100+ Delivered</p>
                </div>
              </div>
            </Link>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { FadeIn, TiltCard } from '@/components/Motion';

const categories = ['All', 'Substations', 'Industrial Plants', 'Control Panels', 'Automation', 'Infrastructure'];

const projects = [
  {
    title: '220kV Substation Integration',
    category: 'Substations',
    description: 'Complete design and commissioning of 220kV substation for industrial park.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
    client: 'Major Industrial Group',
  },
  {
    title: 'Pharmaceutical Plant Instrumentation',
    category: 'Industrial Plants',
    description: 'Full instrumentation upgrade for FDA-compliant pharmaceutical facility.',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=80',
    client: 'Leading Pharma Company',
  },
  {
    title: 'IEC 61439 LV Panel Manufacturing',
    category: 'Control Panels',
    description: 'Design and manufacturing of type-tested LV panels up to 6300A.',
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=1000&q=80',
    client: 'Multiple Clients',
  },
  {
    title: '36kV VCB Panel Installation',
    category: 'Control Panels',
    description: 'Supply and installation of medium voltage VCB panels for power distribution.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80',
    client: 'Infrastructure Developer',
  },
  {
    title: 'SCADA Implementation',
    category: 'Automation',
    description: 'Comprehensive SCADA system implementation for process monitoring and control.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    client: 'Chemical Plant',
  },
  {
    title: 'Smart Building BMS',
    category: 'Automation',
    description: 'Building Management System for premium commercial complex.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    client: 'Real Estate Developer',
  },
  {
    title: 'Data Center Power Infrastructure',
    category: 'Infrastructure',
    description: 'Critical power infrastructure for Tier-3 data center facility.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    client: 'IT Services Company',
  },
  {
    title: 'Automotive Plant Electrical',
    category: 'Industrial Plants',
    description: 'Complete electrical infrastructure for automotive manufacturing plant.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    client: 'Automotive OEM',
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ivory overflow-hidden pt-24">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Our Portfolio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-slate-dark leading-tight">
                Engineering Excellence in Action
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-xl text-slate-light leading-relaxed">
                Explore our portfolio of successful projects across power systems, 
                instrumentation, and automation engineering.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Filter Tabs */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-primary text-white'
                      : 'bg-white text-slate-dark border border-slate-dark/10 hover:border-primary'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TiltCard>
                    <div
                      onClick={() => {
                        setSelectedProject(project);
                        setLightbox(project.image);
                      }}
                      className="group cursor-pointer bg-white shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Hover Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-wider text-champagne mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-xl font-semibold text-slate-dark mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-light text-sm line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Gold underline */}
                        <div className="mt-4 h-0.5 bg-champagne w-0 group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-10 shadow-luxury">
                <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-slate-dark mb-4">
                  Client Appreciation
                </h3>
                <p className="text-slate-light leading-relaxed">
                  Received formal appreciation from Adlabs Imagica for exceptional quality 
                  execution and adherence to project timelines.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 shadow-luxury">
                <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-slate-dark mb-4">
                  Industry Recognition
                </h3>
                <p className="text-slate-light leading-relaxed">
                  Recognized by the Chairman for engineering leadership and sustained 
                  excellence in project delivery.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setLightbox(null);
              setSelectedProject(null);
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-dark/95 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <Image
                src={lightbox}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
              <div className="p-8">
                <p className="text-xs uppercase tracking-wider text-champagne mb-2">
                  {selectedProject.category}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-slate-dark mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-light mb-4">{selectedProject.description}</p>
                <p className="text-sm text-slate-light">
                  <span className="font-medium">Client:</span> {selectedProject.client}
                </p>
              </div>
              <button
                onClick={() => {
                  setLightbox(null);
                  setSelectedProject(null);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-champagne hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

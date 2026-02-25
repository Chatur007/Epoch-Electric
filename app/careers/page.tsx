'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { FadeIn, MagneticButton } from '@/components/Motion';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { value: 15, label: 'Years Experience', suffix: '+' },
  { value: 30, label: 'Major Clients', suffix: '+' },
  { value: 12, label: 'Industries Served', suffix: '+' },
  { value: 100, label: 'Projects Delivered', suffix: '+' },
];

const benefits = [
  {
    title: 'Large-Scale Projects',
    description: 'Work on impactful industrial and infrastructure projects across India.',
    icon: '🏗️',
  },
  {
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities with exposure to latest technologies.',
    icon: '📚',
  },
  {
    title: 'EHS Culture',
    description: 'Strong commitment to Environment, Health, and Safety standards.',
    icon: '🛡️',
  },
  {
    title: 'Professional Development',
    description: 'Clear career paths with mentorship from industry experts.',
    icon: '🚀',
  },
];

const openRoles = [
  {
    title: 'Senior Electrical Engineer',
    department: 'Engineering',
    location: 'Navi Mumbai',
    type: 'Full-time',
    requirements: [
      'B.E./B.Tech in Electrical Engineering',
      '5+ years experience in industrial projects',
      'Expertise in HV/LV systems',
      'Strong project management skills',
    ],
  },
  {
    title: 'Project Manager - E&I',
    department: 'Projects',
    location: 'Navi Mumbai',
    type: 'Full-time',
    requirements: [
      'B.E./B.Tech + MBA preferred',
      '8+ years experience in E&I projects',
      'Client relationship management',
      'Team leadership experience',
    ],
  },
  {
    title: 'Design Engineer - Instrumentation',
    department: 'Engineering',
    location: 'Navi Mumbai',
    type: 'Full-time',
    requirements: [
      'B.E./B.Tech in Instrumentation',
      '3+ years design experience',
      'Proficiency in AutoCAD, EPLAN',
      'Knowledge of PLC/SCADA systems',
    ],
  },
  {
    title: 'Site Supervisor',
    department: 'Operations',
    location: 'Multiple Locations',
    type: 'Full-time',
    requirements: [
      'Diploma/B.E. in Electrical',
      '2+ years site supervision',
      'Safety compliance knowledge',
      'Team coordination skills',
    ],
  },
  {
    title: 'Panel Technician',
    department: 'Manufacturing',
    location: 'Navi Mumbai',
    type: 'Full-time',
    requirements: [
      'ITI/Diploma in Electrical',
      '2+ years panel wiring experience',
      'Ability to read electrical drawings',
      'Quality consciousness',
    ],
  },
];

export default function CareersPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-ivory overflow-hidden pt-24">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Join Our Team
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-slate-dark leading-tight">
                Build Your Career With Power
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-xl text-slate-light leading-relaxed">
                Join a team of passionate engineers shaping the future of electrical 
                infrastructure in India. Grow with us, learn with us.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-sm uppercase tracking-wider text-slate-light">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Why Join Us
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-slate-dark">
                What We Offer
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 text-center"
                >
                  <span className="text-4xl mb-6 block">{benefit.icon}</span>
                  <h3 className="text-lg font-semibold text-slate-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-light text-sm">{benefit.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-slate-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Current Openings
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-white">
                Open Positions
              </h2>
            </FadeIn>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <FadeIn key={role.title} delay={index * 0.08}>
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedRole(expandedRole === role.title ? null : role.title)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                        <span>{role.department}</span>
                        <span>•</span>
                        <span>{role.location}</span>
                        <span>•</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                    <motion.svg
                      animate={{ rotate: expandedRole === role.title ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-champagne"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  
                  <AnimatePresence>
                    {expandedRole === role.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-white/10">
                          <h4 className="text-sm uppercase tracking-wider text-champagne mb-4">
                            Requirements
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {role.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-3 text-white/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2" />
                                {req}
                              </li>
                            ))}
                          </ul>
                          <MagneticButton>
                            <a
                              href="#apply-form"
                              onClick={() => setFormData(prev => ({ ...prev, position: role.title }))}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                              Apply Now
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </MagneticButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="text-center mb-12">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Start Your Journey
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-slate-dark">
                Apply Now
              </h2>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            <div className="bg-white p-10 shadow-luxury-lg relative overflow-hidden">
              {/* Success Overlay */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="success-checkmark mb-6"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-dark mb-2">Application Submitted!</h3>
                    <p className="text-slate-light">We'll review your application and get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="floating-label-group">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="input-luxury"
                      placeholder=" "
                      required
                    />
                    <label className="floating-label">Full Name</label>
                  </div>
                  <div className="floating-label-group">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="input-luxury"
                      placeholder=" "
                      required
                    />
                    <label className="floating-label">Email Address</label>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="floating-label-group">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="input-luxury"
                      placeholder=" "
                      required
                    />
                    <label className="floating-label">Phone Number</label>
                  </div>
                  <div className="floating-label-group">
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                      className="input-luxury bg-transparent"
                      required
                    >
                      <option value="">Select Position</option>
                      {openRoles.map(role => (
                        <option key={role.title} value={role.title}>{role.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="floating-label-group">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="input-luxury min-h-[120px] resize-none"
                    placeholder=" "
                    rows={4}
                  />
                  <label className="floating-label">Cover Letter / Message</label>
                </div>
                
                <div className="pt-4">
                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white font-medium tracking-wide hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                    >
                      Submit Application
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}

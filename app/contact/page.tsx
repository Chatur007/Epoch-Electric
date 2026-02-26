'use client';

import { useState } from 'react';
import { FaBuilding, FaIndustry } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { FadeIn, MagneticButton, TiltCard } from '@/components/Motion';
import { FaBriefcase, FaClipboardList, FaUserTie } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const locations = [
  {
    name: 'Corporate Office',
    address: 'Sector 19, Vashi, Navi Mumbai - 400705',
    map: 'https://maps.google.com/?q=Vashi,Navi+Mumbai',
    icon: <FaBuilding className="text-5xl text-primary mb-4" />,
  },
  {
    name: 'Works 1',
    address: 'Industrial Area, Turbhe MIDC, Navi Mumbai',
    map: 'https://maps.google.com/?q=Turbhe+MIDC,Navi+Mumbai',
    icon: <FaIndustry className="text-5xl text-primary mb-4" />,
  },
  {
    name: 'Works 2',
    address: 'Plot No. 45, Taloja Industrial Area, Navi Mumbai',
    map: 'https://maps.google.com/?q=Taloja+Industrial+Area',
    icon: <FiZap className="text-5xl text-primary mb-4" />,
  },
];

const contacts = [
  {
    name: 'Business Inquiries',
    email: 'info@epochelectric.com',
    phone: '+91 22 2783 0000',
    icon: <FaBriefcase className="text-2xl text-primary" />,
  },
  {
    name: 'Project Coordination',
    email: 'projects@epochelectric.com',
    phone: '+91 22 2783 0001',
    icon: <FaClipboardList className="text-2xl text-primary" />,
  },
  {
    name: 'Careers',
    email: 'careers@epochelectric.com',
    phone: '+91 22 2783 0002',
    icon: <FaUserTie className="text-2xl text-primary" />,
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <PageLayout>
      {/* Hero Image Section */}
      {/* <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src="/images/contact-hero.png" // <-- Replace with your actual hero image path
          alt="Contact Epoch Electric"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Contact Us</h1>
        </div>
      </div> */}
      {/* Hero Section */}
      {/* <section className="relative min-h-[50vh] flex items-center bg-ivory overflow-hidden pt-24">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Get In Touch
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-slate-dark leading-tight">
                Let's Power Your Vision
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-xl text-slate-light leading-relaxed">
                From consultation to completion, our team is ready to discuss your 
                next electrical endeavor. Reach out and let's build something powerful together.
              </p>
            </FadeIn>
          </div>
        </div>
      </section> */}

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/contact-hero.png"
    alt="Contact Epoch Electric"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay (Premium Look) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
    <div className="max-w-3xl text-white">

      <FadeIn>
        <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
          Get In Touch
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="font-serif text-5xl lg:text-6xl font-semibold leading-tight">
          Let's Power Your Vision
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-8 text-xl text-white/80 leading-relaxed">
          From consultation to completion, our team is ready to discuss your 
          next electrical endeavor. Reach out and let's build something powerful together.
        </p>
      </FadeIn>

    </div>
  </div>
</section>

      {/* Locations Section */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
                Our Locations
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-slate-dark">
                Visit Us
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <FadeIn key={location.name} delay={index * 0.1}>
                <TiltCard>
                  <a
                    href={location.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 text-center group min-h-[260px] h-full flex flex-col items-center justify-between"
                  >
                    <div className="flex flex-col items-center">
                      {location.icon}
                      <h3 className="text-lg font-semibold text-slate-dark mb-3">
                        {location.name}
                      </h3>
                      <p className="text-slate-light text-sm mb-4">{location.address}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-champagne text-sm font-medium group-hover:gap-3 transition-all duration-300 mt-2">
                      View on Maps
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-lg uppercase tracking-[0.2em] text-champagne mb-4">
                  Contact Details
                </p>
                <h2 className="font-serif text-3xl font-semibold text-slate-dark mb-8">
                  Reach Out
                </h2>
              </FadeIn>
              
              <div className="space-y-8">
                {contacts.map((contact, index) => (
                  <FadeIn key={contact.name} delay={index * 0.1}>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{contact.icon}</span>
                      <div>
                        <h3 className="font-semibold text-slate-dark mb-1">{contact.name}</h3>
                        <a href={"mailto:" + contact.email} className="block text-champagne hover:text-slate-dark transition-colors duration-300">
                          {contact.email}
                        </a>
                        <a href={"tel:" + contact.phone.replace(/\s/g, '')} className="block text-slate-light hover:text-champagne transition-colors duration-300">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              
              <FadeIn delay={0.4}>
                <div className="mt-12 pt-8 border-t border-slate-dark/10">
                  <h3 className="font-semibold text-slate-dark mb-4">Follow Us</h3>
                  <div className="flex gap-4">
         <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-2xl text-[#E4405F] hover:scale-110 transition" />
  </a>
  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-2xl text-[#1877F3] hover:scale-110 transition" />
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-2xl text-[#1DA1F2] hover:scale-110 transition" />
  </a>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="glass p-10 relative overflow-hidden">
                  {/* Success Overlay */}
                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center"
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
                        <h3 className="text-xl font-semibold text-slate-dark mb-2">Message Sent!</h3>
                        <p className="text-slate-light">We'll get back to you within 24 hours.</p>
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
                        <label className="floating-label">Your Name</label>
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
                        />
                        <label className="floating-label">Phone (Optional)</label>
                      </div>
                      <div className="floating-label-group">
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          className="input-luxury"
                          placeholder=" "
                        />
                        <label className="floating-label">Company (Optional)</label>
                      </div>
                    </div>
                    
                    <div className="floating-label-group">
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="input-luxury bg-transparent"
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Consultation">Project Consultation</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Career Inquiry">Career Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="floating-label-group">
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="input-luxury min-h-[150px] resize-none"
                        placeholder=" "
                        rows={5}
                        required
                      />
                      <label className="floating-label">Your Message</label>
                    </div>
                    
                    <div className="pt-4">
                      <MagneticButton className="w-full">
                        <button
                          type="submit"
                          className="w-full py-4 bg-primary text-white font-medium tracking-wide hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                        >
                          Send Message
                        </button>
                      </MagneticButton>
                    </div>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[50vh] bg-cream overflow-hidden flex justify-center items-center mb-10">
        <FadeIn className="h-full w-full flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.047476754972!2d72.9987!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjAiTiA3MsKwNTknNTUuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="50%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(20%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Epoch Electric Location"
          />
        </FadeIn>
        
        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-sm glass p-6 shadow-luxury-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-champagne rounded-full animate-pulse" />
            <h3 className="font-semibold text-slate-dark">Our Headquarters</h3>
          </div>
          <p className="text-slate-light text-sm">
            Sector 19, Vashi<br />
            Navi Mumbai - 400705<br />
            Maharashtra, India
          </p>
        </motion.div>
      </section>
    </PageLayout>
  );
}

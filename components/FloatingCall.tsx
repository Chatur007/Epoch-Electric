'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FloatingCall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        href="tel:+912240001234"
        className="group flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-full shadow-gold transition-all duration-300 hover:shadow-luxury-lg hover:-translate-y-1 hover:scale-105"
        aria-label="Call Epoch Electric"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-medium hidden sm:inline text-white">Call Now</span>
      </Link>
    </motion.div>
  );
}

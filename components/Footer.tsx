'use client';

import Link from 'next/link';
import { FadeIn } from './Motion';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'HV & EHV Systems', href: '/projects' },
    { label: 'LV & MV Panels', href: '/projects' },
    { label: 'PLC & SCADA', href: '/projects' },
    { label: 'Turnkey Solutions', href: '/projects' },
  ],
  industries: [
    { label: 'Pharmaceuticals', href: '/projects' },
    { label: 'Automotive', href: '/projects' },
    { label: 'Petrochemicals', href: '/projects' },
    { label: 'Infrastructure', href: '/projects' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-champagne to-champagne/70 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl">E</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold">
                    Epoch <span className="text-champagne">Electric</span>
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed max-w-sm mb-8">
                ISO-certified electrical and instrumentation engineering excellence. 
                Delivering premium turnkey solutions from 220kV to 230V since 2010.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-champagne hover:bg-champagne/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-champagne hover:bg-champagne/10 transition-all duration-300 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Links Columns */}
          <div>
            <FadeIn delay={0.1}>
              <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-6 text-champagne">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-champagne transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.15}>
              <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-6 text-champagne">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-champagne transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <h4 className="text-sm uppercase tracking-[0.15em] font-semibold mb-6 text-champagne">
                Industries
              </h4>
              <ul className="space-y-4">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-champagne transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Epoch Electric Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:text-champagne transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-champagne transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/circular-carousel', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [hideNavbar, setHideNavbar] = useState(false);

const [atAbout, setAtAbout] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const about = document.getElementById("about-section");
    if (!about) return;

    const aboutTop = about.getBoundingClientRect().top;

    if (aboutTop <= 500) {
      setAtAbout(true);
    } else {
      setAtAbout(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
<motion.header
  animate={{
    opacity: atAbout ? 0 : 1,
    y: atAbout ? -40 : 0,
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className={`fixed top-0 left-0 right-0 z-50 ${
    atAbout ? "pointer-events-none" : ""
  }`}
>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
<div style={{ width: '8rem', height: '6rem' }}>

    <Link href="/" className="group flex items-center gap-3">
      <div className="relative w-25 h-25">
        <img
          src="/images/Logo/logo4.png"
          alt="Epoch Electric Logo"
          className="w-25 h-25 object-cover"
        />
      </div>
    </Link>
</div>

        {/* Desktop Navigation - Pill Container */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center bg-slate-dark/90 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  pathname === item.href 
                    ? 'bg-primary text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* <Link
              href="/contact#quote"
              className="ml-2 px-5 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-full"
            >
              Get Quote
            </Link> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0 
            }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span 
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0 
            }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-slate-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {links.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium py-2 ${
                      pathname === item.href 
                        ? 'text-primary' 
                        : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-4 bg-primary text-white font-medium rounded-full"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/circular-carousel' },
    { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },

];

export default function Footer() {
  return (
    <footer className="relative text-white">
      <div
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/footer-hero.png')",
          minHeight: '680px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Center CTA */}
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Ready to Build
            <br />
            The Future?
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-2 border border-white/40 rounded-md hover:bg-white/10 transition">
              Get Quote →
            </Link>
            {/* <Link href="/contact" className="px-6 py-2 border border-white/40 rounded-md hover:bg-white/10 transition">
              Become a Distributor →
            </Link> */}
          </div>

          {/* Quick links list */}
          <div className="mt-12 text-white/70">
            <p className="uppercase text-xl tracking-wider mb-4 text-white">Quick Links</p>
            <ul className="flex flex-col items-center gap-2 text-lg text-white">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className=" text-white hover:text-primary transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Brand Text bottom-left */}
        <div className="absolute left-6 bottom-20 z-10">
          <h3 className="text-6xl sm:text-8xl md:text-9xl font-extrabold leading-none ">
            EPOCH
            <br />
            <span className="text-champagne">ELECTRIC</span>
          </h3>
        </div>

        {/* Contact block bottom-right */}
        <div className="absolute right-8 bottom-16 z-10 text-right max-w-xs">
          <p className="text-white/95 mb-2">info@epochelectric.com</p>
          <p className="text-white/95 mb-2">+91 22 2783 0001</p>
          <p className="text-white/95">Pune, India</p>
          <p className="text-xs text-white/50 mt-6">Website Designed by Infiinofy</p>
        </div>

        {/* Footer bottom copyright */}
        <div className="absolute left-6 bottom-6 z-10 text-white/60 text-sm">
          © {new Date().getFullYear()} Epoch Electric Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Epoch <span className="text-electric">Electric</span>
        </Link>
        <ul className="flex gap-6 text-sm md:text-base">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition hover:text-electric ${pathname === item.href ? 'text-electric' : 'text-slate-200'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

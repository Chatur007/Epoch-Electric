import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CursorFollower from '@/components/CursorFollower';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.epochelectric.in'),
  title: {
    default: 'Epoch Electric Pvt. Ltd. | Premium Electrical Engineering',
    template: '%s | Epoch Electric',
  },
  description:
    'ISO-certified electrical and instrumentation engineering company delivering premium turnkey solutions from 220kV to 230V. Engineering excellence since 2010.',
  keywords: [
    'Electrical Engineering',
    'Instrumentation',
    'LV Panels',
    'MV Panels',
    'Turnkey Projects',
    'Industrial Electrical',
    'SCADA',
    'BMS',
    'Navi Mumbai',
  ],
  openGraph: {
    title: 'Epoch Electric Pvt. Ltd.',
    description: 'Premium Electrical & Instrumentation Engineering Solutions',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden">
        <SmoothScroll>
          <CursorFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

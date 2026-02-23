import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.epochelectric.in'),
  title: {
    default: 'Epoch Electric Pvt. Ltd.',
    template: '%s | Epoch Electric',
  },
  description:
    'ISO-certified electrical and instrumentation engineering company delivering turnkey solutions from 220kV to 230V.',
  keywords: ['Electrical Engineering', 'Instrumentation', 'LV Panels', 'MV Panels', 'Turnkey Projects'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

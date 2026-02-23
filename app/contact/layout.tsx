import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with Epoch Electric offices in Navi Mumbai for turnkey engineering solutions.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCall from './FloatingCall';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingCall />
    </>
  );
}

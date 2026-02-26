'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import FloatingCall from './FloatingCall';
import PageTransition from './PageTransition';

export default function PageLayout({ children, hideFooter  }: { children: ReactNode; hideFooter?: boolean}) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      {/* <Footer /> */}
       {!hideFooter && <Footer />}
      {/* <FloatingCall /> */}
    </>
  );
}

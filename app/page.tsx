import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import HeroCanvasAnimation from './sections/HeroCanvasAnimation';
import HeroSection from './sections/HeroSection';
import AboutPreview from './sections/AboutPreview';
import ExpertiseSection from './sections/ExpertiseSection';
import IndustriesSection from './sections/IndustriesSection';
import ProjectsPreview from './sections/ProjectsPreview';
import ClientsSection from './sections/ClientsSection';
import CTASection from './sections/CTASection';
import ScrollFrameAnimationSection from './sections/ScrollFrameAnimationSection';


export const metadata: Metadata = {
  title: 'Home | Premium Electrical Engineering',
  description: 'Epoch Electric - ISO-certified electrical and instrumentation engineering company. Turnkey solutions from 220kV to 230V. Engineering excellence since 2010.',
};

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Epoch Electric Pvt. Ltd.',
    foundingDate: '2010',
    address: { '@type': 'PostalAddress', addressLocality: 'Navi Mumbai', addressCountry: 'India' },
    url: 'https://www.epochelectric.in',
  };

  return (
    <PageLayout>
      <HeroSection/>
      {/* <ScrollFrameAnimationSection/> */}
      <ClientsSection />
      <AboutPreview />
      <ExpertiseSection />
      <IndustriesSection />
      <ProjectsPreview />
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </PageLayout>
  );
}

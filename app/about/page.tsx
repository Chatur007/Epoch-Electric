import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { FadeIn, BlurFadeIn, Parallax, ImageReveal } from '@/components/Motion';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Epoch Electric - 15+ years of electrical and instrumentation engineering excellence. ISO certified, Eaton collaboration.',
};

const epochPhilosophy = [
  { letter: 'E', meaning: 'Ethical Business', description: 'Conducting business with integrity and transparency in all dealings.' },
  { letter: 'P', meaning: 'Providing Impeccable Services', description: 'Delivering excellence in every project we undertake.' },
  { letter: 'O', meaning: 'Obtain Market Leadership', description: 'Striving to be the industry benchmark in electrical engineering.' },
  { letter: 'C', meaning: 'Customer Satisfaction', description: 'Prioritizing client needs and exceeding expectations.' },
  { letter: 'H', meaning: 'Humanity with Integrity', description: 'Building relationships based on trust and respect.' },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety' },
];

const memberships = [
  'Bombay Chamber of Commerce',
  'India SME Forum',
  'Confederation of Indian Industry (CII)',
  'National Safety Council',
  'Electrical Contractors Association of India',
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-ivory overflow-hidden pt-24">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-champagne/5 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                About Epoch Electric
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-slate-dark leading-tight">
                Engineering Excellence Since 2010
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-xl text-slate-light leading-relaxed">
                Headquartered in Navi Mumbai, Epoch Electric Pvt. Ltd. is an ISO-certified 
                organization delivering comprehensive Electrical & Instrumentation engineering 
                solutions from 220kV to 230V.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="font-serif text-4xl font-semibold text-slate-dark mb-8">
                  Our Story
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-slate-light leading-relaxed mb-6">
                  Established in 2010, Epoch Electric has grown from a specialized electrical 
                  contractor to a comprehensive engineering solutions provider. Our journey 
                  has been marked by consistent growth, technical excellence, and unwavering 
                  commitment to quality.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-slate-light leading-relaxed mb-6">
                  Today, we are proud collaborators with Eaton Power Quality Pvt. Ltd. and 
                  Luker Electric Technologies Pvt. Ltd., enabling us to deliver world-class 
                  solutions to our clients across industries.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-8 mt-8">
                  <div>
                    <AnimatedCounter value={15} />
                    <p className="text-sm text-slate-light mt-1">Years of Excellence</p>
                  </div>
                  <div className="w-px h-16 bg-slate-dark/10" />
                  <div>
                    <AnimatedCounter value={100} />
                    <p className="text-sm text-slate-light mt-1">Projects Delivered</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <Parallax offset={30}>
              <ImageReveal direction="right">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                    alt="Epoch Electric Engineering Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
              </ImageReveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* EPOCH Philosophy */}
      <section className="py-24 bg-slate-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Our Philosophy
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-white">
                The EPOCH Approach
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {epochPhilosophy.map((item, index) => (
              <FadeIn key={item.letter} delay={index * 0.1}>
                <div className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-champagne/50 transition-all duration-500 group">
                  <span className="font-serif text-6xl font-bold text-champagne group-hover:scale-110 inline-block transition-transform duration-300">
                    {item.letter}
                  </span>
                  <h3 className="text-white font-semibold mt-4 mb-2">{item.meaning}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                  Quality Assurance
                </p>
                <h2 className="font-serif text-4xl font-semibold text-slate-dark mb-8">
                  Certifications
                </h2>
              </FadeIn>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <FadeIn key={cert.name} delay={index * 0.1}>
                    <div className="flex items-center gap-6 p-6 bg-white shadow-luxury group hover:shadow-luxury-lg transition-all duration-500">
                      <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center group-hover:bg-champagne transition-colors duration-500">
                        <svg className="w-8 h-8 text-champagne group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-dark">{cert.name}</h3>
                        <p className="text-slate-light">{cert.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div>
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                  Industry Recognition
                </p>
                <h2 className="font-serif text-4xl font-semibold text-slate-dark mb-8">
                  Memberships
                </h2>
              </FadeIn>
              
              <div className="space-y-4">
                {memberships.map((membership, index) => (
                  <FadeIn key={membership} delay={index * 0.08}>
                    <div className="flex items-center gap-4 p-4 border border-slate-dark/10 hover:border-champagne hover:bg-white transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-champagne" />
                      <span className="text-slate-dark">{membership}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
                Strategic Partnerships
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-slate-dark">
                Our Collaborations
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-500">
                <h3 className="font-serif text-2xl font-semibold text-slate-dark mb-4">
                  Eaton Power Quality Pvt. Ltd.
                </h3>
                <p className="text-slate-light">
                  Strategic collaboration for power quality solutions and electrical 
                  infrastructure projects across India.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-10 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-500">
                <h3 className="font-serif text-2xl font-semibold text-slate-dark mb-4">
                  Luker Electric Technologies Pvt. Ltd.
                </h3>
                <p className="text-slate-light">
                  Partnership for advanced electrical technologies and 
                  comprehensive project solutions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'ONGC', logo: 'https://e7.pngegg.com/pngimages/626/110/png-clipart-oil-and-natural-gas-corporation-indian-oil-corporation-logo-business-india-text-rectangle-thumbnail.png' },
  { name: 'Larsen & Toubro', logo: 'https://2025prodstorageaccount-eqdyc8g8hpccdfez.a02.azurefd.net/ltprod/media/d44ph50r/lt.svg' },
  { name: 'TATA Power', logo: 'https://www.tatapower.com/content/experience-fragments/tatapoweraemsitesprogram/in/en/tatapower/header/master/_jcr_content/root/container/navigation/image.coreimg.svg/1732251840897/tp-logo.svg' },
  { name: 'Adani', logo: 'https://www.adani.com/-/media/project/adaniv1/logo/adani-logo.svg' },
  { name: 'Bharat Petroleum', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Bharat_Petroleum_logo.svg' },
  { name: 'Reliance Industries', logo: 'https://rilstaticasset.akamaized.net/sites/default/files/2022-11/reliance-industries-ltd.png' },
];

export default function ClientsSection() {
  return (
    <section className="relative py-16 bg-slate-dark overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-lg uppercase tracking-[0.3em] text-champagne font-medium">
          Trusted By Industry Leaders
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-dark to-transparent z-10" />
        
        {/* Carousel Row */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-6 shrink-0"
          >
            {[...clients, ...clients,...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-44 h-24 bg-slate-dark/80 border border-white/10 rounded-2xl flex items-center justify-center px-6 hover:border-champagne/50 transition-all duration-300 group"
              >
                <div className="relative w-full h-12 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={48}
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-h-12"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

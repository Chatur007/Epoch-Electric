"use client";

import{useRef,useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES=300;
const FRAME_PATH='/frames';

export default function HeroCanvasAnimation(){
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const currentFrame = useRef(0);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          for (let i = 1; i <= TOTAL_FRAMES; i++) {
  img.src = `${FRAME_PATH}/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
}
          img.onload = () => {
            setLoadProgress((prev) => prev + (100 / TOTAL_FRAMES));
            resolve(img);
          };
          img.onerror = reject;
        });
      });
      
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
      setImagesLoaded(true);
    };
    
    loadImages();
  }, []);

  const renderFrame = (frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.length) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = images[Math.max(0, Math.min(Math.round(frameNum), TOTAL_FRAMES - 1))];
    
    if (img) {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  useEffect(() => {
    if (!imagesLoaded || !containerRef.current || !canvasRef.current) return;
    
    const ctx = gsap.context(() => {
      // Animate frame sequence with GSAP
      gsap.to(currentFrame, {
        current: TOTAL_FRAMES - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5, // Smooth scrubbing
          onUpdate: (self) => {
            renderFrame(currentFrame.current);
          }
        }
      });
      
      gsap.to('.hero-text-1', {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '10% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-1', {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '20% top',
          end: '25% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-2', {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '30% top',
          end: '35% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-2', {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '50% top',
          end: '55% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-3', {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '60% top',
          end: '65% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-3', {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '80% top',
          end: '85% top',
          scrub: true
        }
      });
      
      gsap.to('.hero-text-4', {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '90% top',
          end: '92% top',
          scrub: true
        }
      });
      

      gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '10% top',
          scrub: true
        }
      });
    });
    
    const handleResize = () => renderFrame(currentFrame.current);
    window.addEventListener('resize', handleResize);
    
    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded, images]);

    if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-[#1A0F0A] flex flex-col items-center justify-center z-50">
        <div className="w-64 h-2 bg-amber-900/30 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#D4A574] to-[#4F9C8F]"
            initial={{ width: '0%' }}
            animate={{ width: `${loadProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-amber-100/70 text-lg font-['Inter']">
          Loading Experience... {Math.round(loadProgress)}%
        </p>
      </div>
    );
  }

   return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div ref={stickyRef} className="sticky top-0 w-[100vw] h-[100vh] overflow-hidden bg-[#1A0F0A]">
        <div className="absolute inset-0">
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ width: '100vw', height: '100vh' }}
          />
        </div>
        
        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div 
            className="hero-text-1 text-center px-4 absolute opacity-0"
          >
            <h1 className="text-7xl md:text-9xl font-['Playfair_Display'] font-bold text-amber-50 mb-4 tracking-tight">
              Experience Coffee
            </h1>
            <p className="text-xl md:text-2xl text-amber-100/80 font-['Inter']">
              Where every sip defies gravity
            </p>
          </div>
          
          <div 
            className="hero-text-2 text-left px-8 md:px-16 max-w-2xl absolute opacity-0"
          >
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-semibold text-amber-50 mb-3">
              Crafted to Perfection
            </h2>
            <p className="text-lg md:text-xl text-amber-100/70 font-['Inter']">
              From bean to cup, excellence floats in every drop
            </p>
          </div>
          
          <div 
            className="hero-text-3 text-right px-8 md:px-16 max-w-2xl ml-auto absolute opacity-0"
          >
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-semibold text-amber-50 mb-3">
              Anti-Gravity Flavor
            </h2>
            <p className="text-lg md:text-xl text-amber-100/70 font-['Inter']">
              Defying expectations, elevating taste beyond limits
            </p>
          </div>
          
          <div 
            className="hero-text-4 text-center px-4 absolute opacity-0"
          >
            <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] font-bold text-amber-50 mb-6">
              Discover Your Blend
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#4F9C8F] to-[#3D8B7F] text-white rounded-full text-lg font-semibold shadow-2xl pointer-events-auto"
            >
              Explore Collection ↓
            </motion.button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-amber-100/60 text-sm font-['Inter'] tracking-wider uppercase">
            Scroll to Explore
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-amber-100/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-amber-100/60 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useRef, useEffect, useState } from "react";
import { FadeIn, SplitText, MagneticButton } from '@/components/Motion';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const TOTAL_FRAMES = 300;
const FRAME_PATH = "/frames";

export default function ScrollFrameAnimationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);



  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          const frameNum = String(i + 1).padStart(3, "0");
          img.src = `${FRAME_PATH}/ezgif-frame-${frameNum}.jpg`;

          img.onload = () => {
            if (!isMounted) return;
            setLoadProgress((prev) => prev + 100 / TOTAL_FRAMES);
            resolve(img);
          };

          img.onerror = reject;
        });
      });

      const loadedImages = await Promise.all(promises);

      if (!isMounted) return;
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  }, []);



useEffect(() => {
  if (!imagesLoaded || !canvasRef.current) return;

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const img = images[0]; 
  if (!img) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = Math.max(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const x = (canvas.width - img.width * scale) / 2;
  const y = (canvas.height - img.height * scale) / 2;

  ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

  lastFrameRef.current = 0;

}, [imagesLoaded, images]);

  const lastFrameRef = useRef<number>(-1);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!canvasRef.current || !imagesLoaded) return;

    const frame = Math.floor(latest);

    if (frame === lastFrameRef.current) return;
    lastFrameRef.current = frame;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frame];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );

    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  });


  const section1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.25],
    [1, 1, 1, 0]
  );

  const section2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.5, 0.55],
    [0, 1, 1, 0]
  );

  const section3Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.8, 0.85],
    [0, 1, 1, 0]
  );

  const section4Opacity = useTransform(
    scrollYProgress,
    [0.9, 0.92, 0.98, 1],
    [0, 1, 1, 0]
  );

  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );



  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${TOTAL_FRAMES * 3}vh` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-screen block"
        />
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        {/* Loader */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-[#1A0F0A] flex flex-col items-center justify-center z-50">
            <div className="w-64 h-2 bg-amber-900/30 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D4A574] to-[#4F9C8F]"
                animate={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-amber-100/70 text-lg">
              Loading Experience... {Math.round(loadProgress)}%
            </p>
          </div>
        )}

        {/* Text Overlays */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center ">
          <motion.div style={{ opacity: section1Opacity }} className="text-center px-4">
            <h1 className="font-bold  leading-tight text-center
               text-[clamp(3rem,8vw,8rem)] max-w-[90vw] mx-auto">
              Engineering <span className="text-champagne">Power.</span>
            </h1>
          </motion.div>

          <motion.div style={{ opacity: section2Opacity }} className="text-left px-8 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-semibold ">
             Delivering{' '}<span className="text-champagne">Precision.</span>
            </h2>
          </motion.div>

          <motion.div style={{ opacity: section3Opacity }} className="text-right px-8 max-w-2xl ml-auto">
            <h2 className="text-5xl md:text-7xl font-semibold">
              Electrical Contractors & <span className="text-champagne">Control Panel Manufacturer</span>
            </h2>
          </motion.div>

          {/* <motion.div style={{ opacity: section4Opacity }} className="text-center px-4">
            <h2 className="text-6xl md:text-8xl font-bold text-amber-50 mb-6">
              Discover Your Blend
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#4F9C8F] to-[#3D8B7F] text-white rounded-full"
            >
              Explore Collection ↓
            </motion.button>
          </motion.div> */}
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <MagneticButton>
      <Link 
        href="/circular-carousel"
        className="group inline-flex items-center gap-3 px-8 py-4 
                   bg-primary text-white font-medium tracking-wide 
                   transition-all duration-500 
                   hover:shadow-xl hover:scale-105"
      >
        Explore Our Work
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </Link>
    </MagneticButton>
  </motion.div>
</div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-amber-100/60 text-sm uppercase">
            Scroll to Explore
          </p>
        </motion.div>
      </div>
    </div>
  );
}
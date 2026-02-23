'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedCounter({ 
  value, 
  suffix = '+',
  className = ''
}: { 
  value: number; 
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { 
      duration: 2,
      ease: [0.22, 1, 0.36, 1]
    });
    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <span ref={ref} className={`font-serif text-5xl lg:text-6xl font-semibold text-champagne ${className}`}>
      <motion.span>{rounded}</motion.span>
      <span className="text-slate-dark/30">{suffix}</span>
    </span>
  );
}

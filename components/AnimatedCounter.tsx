'use client';

import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, suffix = '+' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-electric">
      {rounded}
      {suffix}
    </span>
  );
}

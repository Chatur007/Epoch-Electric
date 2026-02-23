import Link from 'next/link';

export default function FloatingCall() {
  return (
    <Link
      href="tel:+912240001234"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1 animate-pulseGlow"
      aria-label="Call Epoch Electric"
    >
      Call Now
    </Link>
  );
}

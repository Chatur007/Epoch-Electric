import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F8F6',
        cream: '#EFEFEA',
        champagne: '#ef7e1f',
        primary: '#00a1e2',
        secondary: '#ef7e1f',
        blue: {
          brand: '#00a1e2',
       
          light: '#33b4e8',
          dark: '#0081b5',
        },
        orange: {
          brand: '#ef7e1f',
          light: '#f2984b',
          dark: '#bf6519',
        },
        slate: {
          dark: '#1F2A37',
          medium: '#374151',
          light: '#6B7280',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00a1e2 0%, #ef7e1f 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #ef7e1f 0%, #00a1e2 100%)',
        'gradient-brand-horizontal': 'linear-gradient(90deg, #00a1e2 0%, #ef7e1f 100%)',
        'gradient-brand-vertical': 'linear-gradient(180deg, #00a1e2 0%, #ef7e1f 100%)',
      },
      fontFamily: {
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'blur-in': 'blurIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'text-reveal': 'textReveal 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0,161,226,0)' },
          '50%': { boxShadow: '0 0 40px rgba(0,161,226,0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(20px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'luxury': '0 4px 30px rgba(0,0,0,0.06)',
        'luxury-lg': '0 10px 60px rgba(0,0,0,0.1)',
        'gold': '0 4px 30px rgba(0,161,226,0.2)',
      },
    },
  },
  plugins: [],
};

export default config;

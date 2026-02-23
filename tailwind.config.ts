import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#061a3a',
        electric: '#ff7a18',
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        float: 'float 5s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(255,122,24,0)' },
          '50%': { boxShadow: '0 0 30px rgba(255,122,24,0.45)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
};

export default config;

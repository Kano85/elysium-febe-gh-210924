// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // centered container helper
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1240px',
        xl: '1440px',
      },
    },

    // your breakpoints
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
    },

    extend: {
      colors: {
        // Core brand
        'gold-light': '#A78952',
        'gold-dark': '#DFC383',
        'mainbody-veig': '#f8f7f3',
        'hero-dark': '#1e2123',

        // Mission / Projects tokens
        'projects-colorstylesdisable-text':
          'var(--projects-colorstylesdisable-text)',
        'projects-colorstyleshero-dark': 'var(--projects-colorstyleshero-dark)',
        'projects-colorstylesmainbody-veig':
          'var(--projects-colorstylesmainbody-veig)',

        // Metrics / Marketing tokens
        '1-colors-base-base-white': 'var(--1-colors-base-base-white)',
        '1-colors-neutral-neutral-borders':
          'var(--1-colors-neutral-neutral-borders)',

        // Placeholder‐text for CTA
        'neutral-neutral-placeholder-text': '#6c7684',
      },

      fontFamily: {
        // Global fonts
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-suranna)', 'serif'],
        fragmentSans: ['PP Fragment Sans', 'sans-serif'],
        fragmentSerif: ['PP Fragment Serif Light', 'serif'],

        // Elysium component fonts
        'elysium-text-body-l-elysium':
          'var(--elysium-text-body-l-elysium-font-family)',
        'elysium-text-body-s-elysium':
          'var(--elysium-text-body-s-elysium-font-family)',
        'elysium-text-body-XS-elysium':
          'var(--elysium-text-body-XS-elysium-font-family)',

        'elysium-text-heading-2-elysium':
          'var(--elysium-text-heading-2-elysium-font-family)',
        'elysium-text-heading-3-elysium':
          'var(--elysium-text-heading-3-elysium-font-family)',
        'elysium-text-heading-3-elysium-sm':
          'var(--elysium-text-heading-3-elysium-sm-font-family)',
        'elysium-text-heading-5-elysium':
          'var(--elysium-text-heading-5-elysium-font-family)',
      },

      fontSize: {
        h1: 'clamp(3.5rem, 4.6vw, 5.2rem)', // 56px–83.2px
        h2: 'clamp(2.5rem, 3.6vw, 4.2rem)', // 40px–67.2px
        h3: 'clamp(1.5rem, 2vw,   2.8rem)', // 24px–44.8px
        h4: 'clamp(0.96rem,1.2vw,1.44rem)', // 15.36px–23.04px
        h5: 'clamp(1.8rem, 4.8vw, 3.3rem)', // 28.8px–52.8px
      },

      spacing: {
        header: '4rem',
        xs: '0.8rem',
        sm: '1.6rem',
        md: '2.4rem',
        lg: '3.2rem',
        xl: '4.8rem',
      },

      borderWidth: {
        '1': '1px',
      },

      transitionDuration: {
        base: '300ms',
      },

      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '15': '15',
        '20': '20',
      },

      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },

      willChange: {
        opacity: 'opacity',
        transform: 'transform',
        'transform-opacity': 'transform, opacity',
        'filter-transform': 'filter, transform',
      },

      boxShadow: {
        signUp: '0px 5px 10px rgba(0, 0, 0, 0.2)',
        one: '0px 2px 3px rgba(0, 0, 0, 0.05)',
        two: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255,255,255,0.1)',
        'feature-2': '0px 10px 40px rgba(48,86,211,0.12)',
        submit: '0px 5px 20px rgba(0,0,0,0.1)',
        'submit-dark': '0px 5px 20px rgba(0,0,0,0.1)',
        btn: '0px 1px 2px rgba(0,0,0,0.15)',
        'btn-hover': '0px 1px 2px rgba(0,0,0,0.15)',
        'btn-light': '0px 1px 2px rgba(0,0,0,0.1)',
      },

      dropShadow: {
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: [
    'transform-style-preserve-3d',
    'will-change-opacity',
    'will-change-transform',
    'will-change-transform-opacity',
    'will-change-filter-transform',
  ],
};

export default config;

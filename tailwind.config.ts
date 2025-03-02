// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Define all content paths where Tailwind should scan for class names.
  // Since we’re using the "src" folder as our base, we include the pages, app, components,
  // and if applicable, any utils folder (moved from project 1).
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}', // if you have any utilities from project 1
  ],
  theme: {
    // Project 2’s container and screen settings become our base.
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xs: '450px',
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      // Retaining project 1’s "mobile" breakpoint if needed
      mobile: '720px',
    },
    extend: {
      // Merge font families from both projects.
      fontFamily: {
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        heading: ['Mori', 'sans-serif'],
        suranna: ['Suranna', 'serif'],
      },
      // Merge colors from both projects.
      colors: {
        // From project 1
        bg: '#ff5733',
        light: '#fff',
        dark: '#0e100f',
        muted: '#a1a1a6',
        link: '#2997ff',
        // From project 2
        primary: '#D4AF37',
        white: '#FFFFFF',
        black: '#0F0F0F',
        dark2: '#1D1D1D', // additional dark tone
        gray: {
          dark: '#282828',
          light: '#F0F0F0',
        },
        'bg-color-dark': '#121212',
        'body-color': {
          DEFAULT: '#B8B8B8',
          dark: '#E0E0E0',
        },
        stroke: {
          stroke: '#303030',
          dark: '#404040',
        },
        gold: '#D4AF37',
        'h1-color': '#DAC48B',
      },
      // Merge spacing and other extensions.
      spacing: {
        header: '4rem',
        xs: '0.8rem',
        sm: '1.6rem',
        md: '2.4rem',
        lg: '3.2rem',
        xl: '4.8rem',
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
      // Merge boxShadow and dropShadow settings from project 2
      boxShadow: {
        signUp: '0px 5px 10px rgba(0, 0, 0, 0.2)',
        one: '0px 2px 3px rgba(0, 0, 0, 0.05)',
        two: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
        submit: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        'submit-dark': '0px 5px 20px rgba(0, 0, 0, 0.1)',
        btn: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        three: '0px 5px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
  // Keep the safelist from project 1 if those dynamic classes are still needed.
  safelist: [
    'transform-style-preserve-3d',
    'will-change-opacity',
    'will-change-transform',
    'will-change-transform-opacity',
    'will-change-filter-transform',
  ],
};

export default config;

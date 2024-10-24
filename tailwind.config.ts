import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
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
    },
    extend: {
      fontFamily: {
        suranna: ['Suranna', 'serif'],
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#0F0F0F', // Deep black for background
        dark: '#1D1D1D', // Slightly lighter for dark elements
        primary: '#D4AF37', // Gold-like color
        gray: {
          dark: '#282828', // Dark gray for sections like the second screenshot
          light: '#F0F0F0', // Light gray for text or background if needed
        },
        'bg-color-dark': '#121212', // Background dark color
        'body-color': {
          DEFAULT: '#B8B8B8', // Light gray text
          dark: '#E0E0E0', // Slightly lighter gray for body text in dark mode
        },
        stroke: {
          stroke: '#303030', // Dark stroke color for borders
          dark: '#404040',
        },
        gold: '#D4AF37', // The gold color used in the text and icons
        'h1-color': '#DAC48B', // Color for the h1 text
      },
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
};

export default config;

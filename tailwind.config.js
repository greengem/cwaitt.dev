import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './lib/markdown.tsx'
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem'
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {},
      dark: {}
    },
  })],
}

export default config;

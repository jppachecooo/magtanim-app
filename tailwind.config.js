/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#E9F7EF',
          100: '#A9DFBF',
          200: '#008000',
        },
        secondary: {
          default: '#FFFFFF',
          100: '#F8F9F9',
          200: '#7B7D7D',
        },
      },
    },
  },
  plugins: [],
};

// <reference types="nativewind/types" />

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
        accent: {
          default: '#333333',
          100: '#252526',
          200: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};

// <reference types="nativewind/types" />

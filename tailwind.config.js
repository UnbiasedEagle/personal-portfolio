/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(110, 7, 243)',
      },
    },
    fontFamily: {
      navlink: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Inter', 'sans-serif'], 
    },
    screens: {
      'sm': '100px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        Font:["Assistant", "sans-serif"],
      }
       
    },
  },
  plugins: [
    require('daisyui','tailwind-scrollbar'),
  ],
}
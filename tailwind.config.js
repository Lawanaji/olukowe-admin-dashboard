/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        screens: {}
      },
      colors:{
        primary: '#2A5BD7',
        secondary: '#EBF3FF',
        red: '#FF2626',
        gray: '#F8F8F8'
      }
    },
  },
  plugins: [],
}
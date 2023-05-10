/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif'],
        Tangerine:['Tangerine', 'cursive']
      },
      backgroundImage: {
        'service-background': "url('./src/assets/servicebackground1.jpg')",
        'navmenu-background': "url('./src/assets/bgWhite.png')",
      },
    },
  },
  plugins: [],
}
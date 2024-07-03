/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#095CFC',
        bkg: '#F6F6FF',
      }
    },
  },
  plugins: [],
}
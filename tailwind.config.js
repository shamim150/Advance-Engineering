/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],


    },


    extend: {
      colors: {
        primary: ' #262626',
        ptext: '#767676',
        secondary: '#3750A3'

      },
    },
  },
  plugins: [],
}
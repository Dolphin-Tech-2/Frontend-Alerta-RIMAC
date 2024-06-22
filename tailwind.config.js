/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ri-red': '#f03949',
        'ri-white': '#f8faff',
        'ri-blue': '#29293e',
        'ri-text': '#a7a9af'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Define Roboto como la fuente sans-serif por defecto
      },
    },
  },
  plugins: [],
}


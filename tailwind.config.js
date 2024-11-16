/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF9500',
        'btn-grey': '#F1F1F3',
        'light-ora': '#FFF9F0'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{'md-gradient':'radial-gradient( circle, rgba(255, 255, 255, 0.15) 39%, rgba(255, 255, 255, 0) 75% )'}
    },
  },
  plugins: [],
}
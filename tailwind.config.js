/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-landing': "url('/src/assets/img/background.jpg')",
        'vh': '100vh'
      }
    },
  },
  plugins: [],
}
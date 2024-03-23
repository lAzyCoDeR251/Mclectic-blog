/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include your source files
    "./public/index.html",         // Include your HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        gambetta: ['Gambetta', 'serif'],
      },
    },
  },
  plugins: [],
}
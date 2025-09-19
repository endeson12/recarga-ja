/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#21C25E',
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
        'light-text': '#EAEAEA',
        'dark-text': '#1F2937',
        'gray-text': '#888B94',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Define uma fonte padrão mais moderna
      },
    },
  },
  plugins: [],
}
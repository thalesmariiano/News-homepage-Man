/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'd-grayish-blue': '#5d5f79',
        'grayish-blue': '#00001a',
        'soft-red': '#f15e50',
        'soft-orange': '#e9ab53'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}


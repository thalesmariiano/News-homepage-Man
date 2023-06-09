/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      screens: {
        '2md': '903px'
      },
      colors: {
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'soft-orange': 'hsl(35, 77%, 62%)'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}


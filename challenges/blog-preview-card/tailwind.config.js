/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{html,js}',
      ],
    theme: {
      extend: {
        colors: {
            primary: 'hsl(47, 88%, 63%)',
            white: 'hsl(0, 0%, 100%)',
            lightgrey: 'hsl(0, 0%, 50%)',
            lightblack: 'hsl(0, 0%, 7%)'
        },
        fontFamily: {
            'figtree': ['Figtree', 'sans-serif']
          }
      },
    },
    plugins: [],
  }
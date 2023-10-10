/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        cine: ['Racing Sans One', "cursive"]
      },
      container: {
        center: true,
      },
      screens: {
        'tablet': '500px',
        's515': '515px'
        // => @media (min-width: 640px) { ... }


      },
    },
  },
  plugins: [],
}

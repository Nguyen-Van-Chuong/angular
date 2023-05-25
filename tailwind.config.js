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
        Poppins: ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2b4e7e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

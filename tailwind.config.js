module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/7': '14.2857%',
        '2/7': '28.5714%',
        '3/7': '42.8571%',
        '4/7': '57.1429%',
        '5/7': '71.4286%',
        '6/7': '85.7142%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
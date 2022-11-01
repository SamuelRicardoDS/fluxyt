/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.tsx"],
  theme: {
    extend: {},
    fontfamily: {
      raleway: ["Raleway", "sans-serif"],
      deca: ["Lexend Deca", "sans-serif"],
    }
  },
  plugins: [],
}

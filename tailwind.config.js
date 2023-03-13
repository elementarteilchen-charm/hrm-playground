/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
         transparent: 'transparent',
         current: 'currentColor',
         black: colors.black,
         white: colors.white,
         gray: colors.gray,
         red: colors.red,
         blue: colors.sky,
         emerald: colors.emerald,
         indigo: colors.indigo,
         yellow: colors.yellow,
    },
    extend: {
      screens: {
        '8xl': '1920px'
      }
    },
  },
  plugins: [],
}
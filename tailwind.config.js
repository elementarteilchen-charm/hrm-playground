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
        green: colors.green,
        orange: colors.orange,
        yellow: colors.yellow,
        'Dunkelblau': '#0F2765',
        'Mittelblau': '#00529E',
        'Hellblau': '#4699CE',
        'OrangeGelb': '#E6B035',
        'Blaugrau': '#8197A5',
        'Dunkelgrau': '#333333',
        'Mittelgrau': '#999999',
        'Hellgrau': '#D5D5D5',
        'Dungelgrau-8': '#EFEFEF',
        'Blaugrau-25': '#DFE5E8',
        'Blaugrau-10': '#F2F4F6' ,
    },
    extend: {
      screens: {
        '8xl': '1920px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
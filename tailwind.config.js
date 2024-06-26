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
        green: colors.green,
        orange: colors.orange,
        'primary': '#0D6EFD',
        'secondary': '#6C757D',
        'Rot': '#DB0000',
        'Blau': '#3F69FF',
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
        'Orange': '#FF8C04',
        'Orange-hell': '#f0c675',
        'Orange-10': '#FFE8CD',
        'Orange-80': '#FFAF4F',
        'Gruen-10': '#CCEECC', 
        'Gruen': '#00AA00',
        'Gruen-logo': '#c3f000'
    },
    extend: {
      screens: {
        '8xl': '1920px'
      },
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgba(50, 50, 50, 0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
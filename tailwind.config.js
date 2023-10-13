/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./public/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      teal: colors.teal,
      'astronaut-blue': {
        '50': '#f2f8fd',
        '100': '#e3effb',
        '200': '#c2e0f5',
        '300': '#8cc6ed',
        '400': '#4ea8e2',
        '500': '#278dd0',
        '600': '#1970b0',
        '700': '#155a8f',
        '800': '#164d76',
        '900': '#163d5d',
        '950': '#102941',
      },
    },
    extend: {
      spacing: {
        13 : '3.25rem'
      },
      fontFamily:{
        'raleway':['Raleway'],
        'inter':['Inter'],
        'Montserrat': ['Montserrat']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ],
  
}



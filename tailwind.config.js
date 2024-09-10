import { GLOBAL_STYLES } from './common/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...GLOBAL_STYLES.colors
      },
    },
  },
  plugins: [],
};

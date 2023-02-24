/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      darkMode: 'media',
      colors: {
        primary: '#BD242A',
        primaryvariant: '#D83137',
        BackgroundLight: '#FBFBFD',
        BackgroundDark: '#1f1d1d',
        TextLight: '#000000',
        TextDark: '#ffffff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

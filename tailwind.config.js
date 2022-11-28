/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM_Sans: ['DM Sans', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}

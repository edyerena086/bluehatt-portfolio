/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Noto Sans'],
        body: ['Inter'],
      },
      colors: {
        primary: '#666666',
        ligth: '#F9F9F9',
        blue: '#00A1E1',
        orange: '#FB8500',
      },
    },
  },
  plugins: [],
}


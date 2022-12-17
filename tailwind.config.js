/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },

    colors: {
      transparent: 'transparent',
      primary: '#264653',
      accent: '#2A9D8F',
    },

    fontFamily: {
      main: ['Poppins', 'sans-serif'],
      sub: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

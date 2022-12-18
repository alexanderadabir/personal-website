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
      main: ['IBM Plex Mono', 'sans-serif'],
      sub: ['Space Mono', 'sans-serif'],
    },

    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(10px)' },
        '50%': { transform: 'translateY(0)' },
      },
    },
  },
  plugins: [],
}

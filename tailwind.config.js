/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'class',
    extend: {
      backgroundImage: {
        transparent: 'transparent',
        'my-photo': "url('../public/img/my-photo.png')",
        'dark-my-photo': "url('../public/img/dark-my-photo.png')",
      },
    },
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
      dark: '#191919',
      dark_text_primary: '#F4A261',
      dark_text_active: '#E76F51',
      dark_text_accent: '#E9C46A',
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

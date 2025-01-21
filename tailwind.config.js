/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./frontend/src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        'darkgrey': '#000810',
        'lightgreen': '#00FF66',
        'lightgrey': '#BABCBE',
        'bluegrey': '#0D151C',
        'backcard': 'rgba(255, 255, 255, 0.05)',
        'primary': '#00FF66',
        'background': '#000810',
        'sidebar': '#001220',
        'card-bg': 'rgba(255, 255, 255, 0.05)',
        'text': '#ffffff',
        'text-secondary': '#a0a0a0',
        'hover': 'rgba(0, 255, 102, 0.1)',
        'border': 'rgba(255, 255, 255, 0.1)',
        'danger': '#ff4444',
        'warning': '#FFA500',
        'success': '#00CC66',
        'text-white': 'var(--text-white)',
        'accent-green': 'var(--accent-green)',
        'hover-bg': 'var(--hover-bg)',

      },
      fontFamily: {
        'quicksand' : ['quicksand', 'sans-serif'],
    },
      fontSize: {
        '10xl': '19rem',
      },
      backgroundImage: {

        





      }, 
      boxShadow: {
        '3xl': '0 10px 60px -10px rgba(0, 0, 0, 0.6)',
      },
      screens: {
        'sm': {'max': '639px'}, // jusqu'à 640px
        'md': {'max': '767px'}, // jusqu'à 768px
        'lg': {'max': '1023px'}, // jusqu'à 1024px
        'xl': {'max': '1279px'}, // jusqu'à 1280px
        '2xl': {'max': '1535px'}, // jusqu'à 1536px
      }, 
      },
    },
    // darkMode: 'class',
  }

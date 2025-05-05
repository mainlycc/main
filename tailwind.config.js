/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(0 0 0)',
        foreground: 'rgb(255 255 255)',
        muted: 'rgb(38 38 38)',
        border: 'rgb(51 51 51)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      animation: {
        'star-movement-top': 'star-movement-top 6s linear infinite',
        'star-movement-bottom': 'star-movement-bottom 6s linear infinite',
      },
      keyframes: {
        'star-movement-top': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} 
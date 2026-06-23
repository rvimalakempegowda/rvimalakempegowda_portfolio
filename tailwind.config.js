/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold:    { DEFAULT: '#c9a84c', light: '#e2c27d', dark: '#a07830', muted: 'rgba(201,168,76,0.08)' },
        surface: { DEFAULT: '#0f0f0f', 2: '#141414', 3: '#191919', 4: '#1e1e1e' },
        ink:     { DEFAULT: '#080808', deep: '#040404' },
        cream:   { DEFAULT: '#ede8df', muted: '#7d756c', faint: '#3a3530' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
}

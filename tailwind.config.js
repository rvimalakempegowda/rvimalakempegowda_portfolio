/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold:    { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#d97706', muted: 'rgba(245,158,11,0.12)' },
        surface: { DEFAULT: '#141414', 2: '#1a1a1a', 3: '#202020' },
        cream:   { DEFAULT: '#e8e0d5', muted: '#9a8f83', faint: '#4a443e' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

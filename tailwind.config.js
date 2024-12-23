/** @type {import('tailwindcss').Config} */
import daisyUi from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [daisyUi],
}

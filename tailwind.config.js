/** @type {import('tailwindcss').Config} */
import daisyUi from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
      colors: {
        primary: '#868bc4',
        secondary:"#c4c8f9",
        accent: '#32CD32',
        dark: '#333333',
        light: '#FFFFFF',
      },
    },
  },
  plugins: [daisyUi],
}

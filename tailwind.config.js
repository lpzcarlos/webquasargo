/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030A17',
        card: '#0D1929',
        border: '#162840',
        primary: {
          DEFAULT: '#00CFBF',
          text: '#E4ECFF'
        },
        accent: {
          cyan: '#22D3EE',
          purple: '#6D28D9',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}

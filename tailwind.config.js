/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-gray':'#8B8B8B',
        'blue-sync': '#00AEEF',
        'lightblue-sync': '#88DFFF',
        'gray': '#D9D9D9',
        'light-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lilac': '#3E267F'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'sm': {'min': '320px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'}
      }
    },
  },
  plugins: [],
}


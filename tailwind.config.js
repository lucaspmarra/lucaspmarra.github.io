/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orkut: {
          blue: '#3B5998',
          lightblue: '#D9E6F6',
          header: '#6D84B4',
        }
      }
    }
  },
  plugins: [],
}


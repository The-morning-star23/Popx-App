/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6039a7',
        'secondary-purple': '#efe9f9',
      }
    },
  },
  plugins: [],
}


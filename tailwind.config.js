/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '1.2rem', // Custom border-radius between 2xl and 3xl
      },
    },
  },
  plugins: [],
}


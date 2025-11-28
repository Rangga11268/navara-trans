/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        navy: {
          900: "#0a192f",
          800: "#112240",
          700: "#233554",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
    },
  },
  plugins: [],
};

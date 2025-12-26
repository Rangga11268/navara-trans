/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Unbounded", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#C19349", // Navara Gold / Luminous Bronze (Refined from #8d622d)
          black: "#0A0A0A", // Deepest Black
          gray: "#F4F4F5", // Clean Surface
          white: "#FFFFFF",
        },
        accent: {
          lime: "#CCFF00", // Cyber Lime (for small pops)
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
      },
      animation: {
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        reveal: "reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        reveal: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

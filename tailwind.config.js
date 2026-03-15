/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {

      colors: {
        primary: "#1d4ed8",
        secondary: "#f97316",
        accent: "#22c55e",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },

      screens: {
        xs: "475px",
      },

      /* ADD THIS */

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },

      animation: {
        marquee: "marquee 25s linear infinite"
      }

    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
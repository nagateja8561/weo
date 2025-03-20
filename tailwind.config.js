/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files for purging unused CSS
    "./public/index.html"         // Optional: Include HTML templates if needed
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for consistency
        primary: "#1d4ed8", // Blue (Primary)
        secondary: "#f97316", // Orange (Secondary)
        accent: "#22c55e", // Green (Accent)
      },
      fontFamily: {
        // Add professional fonts
        sans: ["Inter", "sans-serif"], // Replace with your preferred font
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        // Custom spacing for better scalability
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      screens: {
        // Adjust breakpoints for responsiveness
        xs: "475px", // Custom small screen breakpoint
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better forms styling
    require("@tailwindcss/typography"), // Add prose for rich text
    require("@tailwindcss/aspect-ratio"), // Manage aspect ratios for images/videos
  ],
};

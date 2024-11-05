// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the 'components' directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Custom primary color
        secondary: "#2d3748", // Custom secondary color
        accent: "#3182ce", // Custom accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

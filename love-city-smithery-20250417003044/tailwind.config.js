/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19C1FF",
        ton: "#0098EA",
        background: "#181C24",
        card: "#232734",
        accent: "#6AFFD7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We'll set up a stark, brutalist dark mode base
        base: "#050505",
        surface: "#111111",
        accent: "#ff3333", // A sharp cinematic red for subtle accents
      }
    },
  },
  plugins: [],
}
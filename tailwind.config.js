/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "cursive"],
        zenDots: ["Zen Dots", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

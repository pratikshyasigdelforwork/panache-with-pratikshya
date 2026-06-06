/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        luxury: {
          black: "#1a1a1a",
          gold: "#c5a059",
          white: "#fafafa",
        },
      },
    },
  },
  plugins: [],
}

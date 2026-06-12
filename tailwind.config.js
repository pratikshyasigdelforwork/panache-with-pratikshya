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
          black: "#000000",
          white: "#ffffff",
          gray: "#f4f4f4",
        },
      },
    },
  },
  plugins: [],
}

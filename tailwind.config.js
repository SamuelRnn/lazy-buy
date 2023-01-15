/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        modal: "calc(100vh - 230px)",
      },
      colors: {
        fondo: {
          50: "#f9ebeb",
          100: "#eec4c4",
          200: "#e29c9c",
          300: "#d77575",
          400: "#cb4d4d",
          500: "#b23434",
          600: "#8a2828",
          700: "#631d1d",
          800: "#3b1111",
          900: "#140606",
          1000: "rgba(64,173,72,255)",
        },
        textH1: {
          50: "#FF8787",
        },
      },
      width: {
        product_form: "min(98%, 600px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const myUtilities = {
        ".bg-pry-600": { background: "#464B52" },
        ".clr-sec-base": { color: "#FECB00" },
      };
      addUtilities(myUtilities);
    }),
  ],
};

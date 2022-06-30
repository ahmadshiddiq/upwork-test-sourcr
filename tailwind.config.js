/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11283C",
        secondary: "#E84778",
        error: "#E53700",
        warning: "#EDAB00",
      },
      dropShadow: {
        one: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};

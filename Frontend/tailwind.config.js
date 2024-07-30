/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#62287C",
        secondary: "#FC5DAD",
      },
      width: {
        xs: "20rem",
        sm: "24rem",
        md: "32rem",
        lg: "48rem",
        xl: "64rem",
      },
      height: {
        xs: "20rem",
        sm: "24rem",
        md: "32rem",
        lg: "48rem",
        xl: "64rem",
      },
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

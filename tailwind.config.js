/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "rgb(0 0 0 / 50%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 2px, rgb(0 0 0 / 12%) 0px 3px 14px 5px",
        "4xl": "-2px 2px 6px -2px #000000",
        "5xl": "0px 0px 9px -5px rgba(0,0,0,0.2)",
      },
      colors: {
        orange: {
          900: "#f4a15d",
        },
        gray: {
          400: "#bbbbbb",
          500: "#9b9b9b",
        },
        brown: {
          900: "#be7230",
        },
      },
      fontFamily: {
        sans: "Noto Sans",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      widest: "1px",
    },
    extend: {
      boxShadow: {
        "3xl":
          "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      },
      colors: {
        orange: {
          900: "#f4a15d",
        },
      },
      fontFamily: {
        sans: "Noto Sans",
      },
    },
  },
  plugins: [],
};

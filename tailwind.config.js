/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      display: ["Montserrat"],
      other: ["Fraunces"],
    },

    extend: {
      colors: {
        veryDarkBlue: "#1c232b",
        darkCyan: "#3c8067",
        cream: "#f2ebe3",
        darkGrayishBlue: "#6c7289",
      },
    },
  },
  plugins: [],
};

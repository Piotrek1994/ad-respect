/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./dist/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#dcc1ab",
        secondary: "#1B5B31",
        "primary-hover": "#dcc1ab96",
        background: "#F5F0EC",

        "my-black": "#111111",
      },
      height: {
        "24rem": "24rem",
        "34rem": "34rem",
        "44rem": "44rem",
      },
      gridAutoColumns: {
        "1fr": "minmax(40rem, 1fr)",
      },
      fontSize: {
        28: "28px",
        40: "40px",
      },
      margin: {
        32: "32px",
        62: "62px",
        63: "63px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};

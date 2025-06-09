/** @type {import('tailwindcss').Config} */
const themes = require("daisyui/src/colors/themes")

module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...themes["[data-theme=light]"],
          primary: "#65ac00",
          secondary: "#406600",
          "base-200": "#94d200",
          "base-300": "#f4f4f4",
        },
      },
      "dark",
    ],
  },
};

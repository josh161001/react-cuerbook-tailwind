/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        claro: "#F2D0AD",
        rojizo: "#621132",
        azul: "#1B396A",
        grayTec: "#807E82",
      },
    },
  },
  plugins: [require("flowbite/plugin")],

  darkMode: "class",
};

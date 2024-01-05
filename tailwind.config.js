module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0d0d0f", "900_7e": "#0d0d0f7e", "900_b0": "#0d0d0fb0" },
        white: { A700_b0: "#ffffffb0", A700: "#ffffff" },
        gray: {
          50: "#f9fafb",
          500: "#909193",
          800: "#414141",
          "500_01": "#a6a7a8",
        },
        blue_gray: { "900_0a": "#2d36430a", "900_0c": "#3232470c" },
        yellow: { 50: "#fff9e6" },
        amber: {
          100: "#ffebb0",
          200: "#ffe28a",
          300: "#ffd454",
          A700: "#e8ae00",
          A700_6c: "#e8ae006c",
        },
        green: { 600: "#43a048" },
        cyan: { 50: "#ebfffd", 600: "#01b8c6", 800: "#098895", 900: "#135966" },
      },
      boxShadow: {
        bs: "0px 3px  8px -1px #3232470c",
        bs1: "0px 8px  11px -4px #2d36430a",
      },
      fontFamily: { exo: "Exo", leaguespartan: "League Spartan" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

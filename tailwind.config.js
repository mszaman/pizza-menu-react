/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        gold: {
          0: "#f7f2e9",
          1: "#edc84b",
          2: "#e9bb24",
          3: "#af8602",
        },
        grey: {
          1: "#888",
          2: "#252525",
        },
      },
      screens: {
        tablet: "750px",
      },
    },
  },
  plugins: [],
};

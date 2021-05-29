module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#138EFF",
          light: "#41a1f9",
        },
        background: "#F3F7F8",
        background2: "#fdfdfd",
        "input-grey": "#F6F6F6",
      },
      translate: {
        "-90p": "-90%",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      soft: "hsl(215,51%,70%)",
      cyan: "hsl(178,100%,50%)",
      main: "hsl(217,54%,11%)",
      card: "hsl(216,50%,16%)",
      line: "hsl(215,32%,27%)",
      white: "hsl(0,0%,100%)",
    },

    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

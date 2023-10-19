/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        "hero-bgnd":
          "url('../images/bg-pattern-intro-desktop.svg'), linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        "section-bgnd":
          "url('../images/bg-pattern-circles.svg'), linear-gradient(90deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
      },
    },
    screens: {
      scrn900: { max: "900px" },
      scrn400: { max: "400px" },
      scrn600: { max: "600px" },
    },
  },
  plugins: [],
};

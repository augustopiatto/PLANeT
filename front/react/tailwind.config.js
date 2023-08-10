/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dirt-md":
          "0 4px 6px 2px rgb(84, 55, 11, 0.3), 0 2px 4px 4px rgb(84, 55, 11, 0.3)",
        "dirt-md-up": "0 -4px 6px 2px rgb(84, 55, 11, 0.3)",
        emphasis: "0 0 2px 2px rgb(88,181,56,0.3)",
      },
      backgroundImage: {
        "vine-background":
          "linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)), url(./src/assets/images/leaves.jpg)",
      },
      colors: {
        plant: "rgba(80, 130, 50, 0.7)",
        dirtier: "rgba(84, 55, 11, 0.8)",
        dirt: "rgba(84, 55, 11, 0.6)",
        "clear-dirt": "rgba(84, 55, 11, 0.4)",
        "clearer-dirt": "rgba(84, 55, 11, 0.2)",
      },
    },
  },
  plugins: [],
};

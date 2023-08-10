/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dirt-md":
          "0 4px 6px 2px rgb(84, 55, 11, 0.3), 0 2px 4px 4px rgb(84, 55, 11, 0.3)",
        "dirt-md-up": "0 -4px 6px 2px rgb(84, 55, 11, 0.3)",
        emphasis: "0 0 4px 0 rgb(88,181,56,0.8)",
      },
      backgroundImage: {
        // verde: #58B538
        // marrom: #54370B
        terrario:
          "linear-gradient(177deg, rgba(88,181,56,0.97) 0%, rgba(84,55,11,0.95) 95%)",
        "vine-background":
          "linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)), url(./src/assets/images/leaves.jpg)",
        // linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://i.imgur.com/xnh5x47.jpg");
      },
      colors: {
        plant: "rgba(88, 181, 56, 0.5)",
        "clear-dirt": "rgba(84, 55, 11, 0.4)",
        "clearer-dirt": "rgba(84, 55, 11, 0.2)",
      },
    },
  },
  plugins: [],
};

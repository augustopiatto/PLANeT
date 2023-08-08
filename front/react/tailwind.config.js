/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "md-up":
          "0 -4px 6px -1px rgb(0, 0, 0, 0.1), 0 -2px 4px -2px rgb(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        terrario:
          "linear-gradient(177deg, rgba(88,181,56,0.97) 0%, rgba(84,55,11,0.95) 95%)",
      },
    },
  },
  plugins: [],
};

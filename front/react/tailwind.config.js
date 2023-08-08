/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "md-up":
          "0 -4px 6px -1px rgb(0, 0, 0, 0.1), 0 -2px 4px -2px rgb(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#202833",
          100: "#0b0c10",
        },
        grey: {
          50: "#c5c6c8",
        },
        cyan: {
          50: "#66fcf1",
          100: "#46a29f",
        },
      },
    },
  },
  plugins: [],
};

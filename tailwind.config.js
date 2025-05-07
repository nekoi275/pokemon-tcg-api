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
      keyframes: {
        "showLetter": {
          "100%": {transform: "translateY(-50px)"}
        },
        "openEnvelope1": {
          "0%": {"transform": "rotateX(0deg)"},
          "100%": {"transform": "rotateX(90deg)"}
        },
        "openEnvelope2": {
          "0%": {"transform": "rotateX(90deg)"},
          "100%": {"transform": "rotateX(180deg)"}
        }
      },
      animation: {
        "show-letter": "showLetter 0.5s ease forwards 0.5s",
        "open-envelope-1": "openEnvelope1 0.25s linear forwards",
        "open-envelope-2": "openEnvelope2 0.25s linear forwards 0.25s"
      }
    },
  },
  plugins: [],
};

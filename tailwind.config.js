/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        showText: {
          "50%": { borderColor: "transparent" },
        },
        showQuestion: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "show-text": "showText 0.4s infinite step-end alternate",
        "show-question": "showQuestion 0.4s infinite step-end alternate",
      },
      backgroundImage: {
        animatedBG: "url('/src/assets/animatedGIF.gif')",
      },
      colors: {
        "alfa-black": "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};

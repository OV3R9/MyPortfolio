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
        appearsl: {
          from: {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        appearsr: {
          from: {
            transform: "translateX(100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "show-text": "showText 0.4s infinite step-end alternate",
        "show-question": "showQuestion 0.4s infinite step-end alternate",
        "appears-anim-l": "appearsl 2s linear",
        "appears-anim-r": "appearsr 2s linear",
      },
      backgroundImage: {
        animatedBG: "url('/src/assets/animatedGIF.gif')",
      },
      colors: {
        "alfa-black": "rgba(0,0,0,0.7)",
      },
      screens: {
        lgg: "1420px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-timeline": {
          "animation-timeline": "view()",
        },
        ".animation-range": {
          "animation-range": "entry 0% cover 40%",
        },
      });
    },
  ],
};

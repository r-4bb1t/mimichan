module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        background: "background 200s linear infinite",
        background2: "background 150s linear infinite",
        shake: "shake .3s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        background: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "10000px 10000px" },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, -1px, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 2px, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, -4px, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 4px, 0)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

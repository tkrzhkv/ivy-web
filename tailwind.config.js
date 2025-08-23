/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
        "slow-bounce": "bounce 2s infinite",
        "up-down": "up-down 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        cursive: "var(--font-cursive)",
        ivy_regular: "var(--font-ivy_regular)",
        ivy_normal_black: "var(--font-ivy_normal_black)",
        ivy_normal_bold: "var(--font-ivy_normal_bold)",
        ivy_normal_medium: "var(--font-ivy_normal_medium)",
      },
    },
  },
  plugins: [],
};

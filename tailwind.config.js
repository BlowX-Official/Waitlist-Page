/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        customBlack: "#121313",
        customBlue: "#3656FF",
        placeholder: "#999999",
        primaryGreen: "#157F1F",
        lemonGreen: "#9CD326",
        secondaryGreen: "#4CB963",
        thirdGreen: "#A0EADE",
        grey: "#5C6784",
        deepBlue: "#0B2344",
        primaryYellow: "#FFA800",
        orange: "#FF5F00",
        ash: "#303030",
        footer: "#D9D9D9",
        footerText: "#5B5B5B",
        border: "#F0F0F0",
        placeholder: "#7A7978",
        yellow: "#F37715",
      },
    },
  },
  plugins: [],
};

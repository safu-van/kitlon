/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        'dvh': '100dvh',
      },
      colors: {
        customGrey: "#A9A9A9",
        customLightGrey: "#F4F3F3",
        customRingGrey: "CACACA",
        customGreen: "#18B100",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./templates/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        finia: {
          navy: "#020817",
          cyan: "#16d8d4",
          blue: "#1f7ae0",
        },
      },
    },
  },
  plugins: [],
};

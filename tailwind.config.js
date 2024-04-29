/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#FEFEFE",
        "custom-gray": "#B3B3B3",
        "custom-orange": "#DBA365",
        "custom-black": "#111111",
        "custom-grayish": "#F8F8F8",
        "custom-bg-black" : '#4C4C4C',
      },
    },
  },
  plugins: [],
};

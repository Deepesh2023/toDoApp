/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/List.jsx",
    "./src/components/NewToDoForm.jsx",
    "./src/components/ToDo.jsx",
  ],
  theme: {
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

// Use Extend object for update tag

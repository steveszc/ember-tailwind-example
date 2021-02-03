/*global module*/
module.exports = {
  purge: {
    enabled: true,
    content: ["./app/index.html", "./app/**/*.hbs"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

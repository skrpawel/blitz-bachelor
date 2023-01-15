// tailwind.config.js
module.exports = {
  content: [
    "src/**/*.{tsx,jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "runner": "url('../../../src/assets/run.jpg')",
      }
    },
  },
  plugins: [],
}


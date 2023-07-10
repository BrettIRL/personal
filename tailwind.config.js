const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          {
            fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
          },
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        "grid-texture":
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(241 245 249 / 0.03)'><path d='M0 .5H31.5V32'/></svg>\")",
        "grid-gradient":
          "linear-gradient(to left, rgb(12, 17, 32), rgba(12, 17, 32, 0) 50%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

// @ts-expect-error — no types available
import * as prettierPluginAstro from "prettier-plugin-astro";
import * as prettierPluginTailwindcss from "prettier-plugin-tailwindcss";

export default {
  plugins: [prettierPluginAstro, prettierPluginTailwindcss],
  overrides: [
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};

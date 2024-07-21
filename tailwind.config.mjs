/** @type {import('tailwindcss').Config} */

import catppuccinDaisyui from "@catppuccin/daisyui";
import catppuccin from "@catppuccin/tailwindcss";
import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    catppuccin({
      // defaultFlavour: "latte",
    }),
    plugin(({ addVariant, e }) => {
      addVariant("wf-non-active", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `html:not(.wf-active) .${e(`wf-non-active${separator}${className}`)}`;
        });
      });
    }),
  ],
  daisyui: {
    themes: [catppuccinDaisyui("latte", "mauve"), catppuccinDaisyui("mocha", "mauve")],
    // darkTheme: "mocha",
    // themeRoot: "*",
  },
  darkMode: ["class", "[data-theme='mocha']"],
};

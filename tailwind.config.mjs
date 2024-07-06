/** @type {import('tailwindcss').Config} */

import catppuccin from "@catppuccin/daisyui";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(({ addVariant, e }) => {
      addVariant("wf-non-active", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `html:not(.wf-active) .${e(`wf-non-active${separator}${className}`)}`;
        });
      });
    }),
  ],
  daisyui: {
    themes: [catppuccin("latte", "mauve"), catppuccin("mocha", "mauve")],
    // darkTheme: "mocha",
    // themeRoot: "*",
  },
  darkMode: ["class", "[data-theme='mocha']"],
};

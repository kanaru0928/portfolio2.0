/** @type {import('tailwindcss').Config} */

import catppuccin from "@catppuccin/daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [catppuccin("latte", "mauve"), catppuccin("mocha", "mauve")],
    // darkTheme: "mocha",
    // themeRoot: "*",
  },
  darkMode: ["class", "[data-theme='mocha']"],
};

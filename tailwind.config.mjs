/** @type {import('tailwindcss').Config} */

import catppuccin from '@catppuccin/daisyui'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
      catppuccin("mocha", 'mauve'),
      // You can simply select a catppuccin flavor with sane default colors
      catppuccin('latte'),
      // Or you can optionally specify accent colors
      catppuccin('frappe', 'pink'),
      // Or you can optionally customize more semantic colors
      catppuccin('macchiato', { primary: 'maroon' }),
      // Values not explicitly defined will use default values
    ],
	}
}

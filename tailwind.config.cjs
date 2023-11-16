/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
				display:["Berkshire Swash", ...defaultTheme.fontFamily.serif],
				title:["Rasa", ...defaultTheme.fontFamily.serif],
				body:["Averia Serif Libre", ...defaultTheme.fontFamily.serif]
			},
			colors: {
				primary: {
				},
				secondary: {
				},
			},
		},
	},
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	darkMode: "class",
};

// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/apps/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				dark: "var(--color-dark)",
				muted: "var(--color-muted)",
				grayish: "var(--color-grayish)",
				light: "var(--color-light)",
			},
		},
	},
	plugins: [],
};

export default config;

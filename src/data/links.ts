// src/data/links.ts

import { Discord, Github, Instagram, LinkedIn } from "@/assets";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
];

export const socialLinks = [
	{ href: "https://github.com/ianramy", icon: Github, label: "GitHub" },
	{
		href: "https://www.instagram.com/ian_ramy/",
		icon: Instagram,
		label: "Instagram",
	},
	{
		href: "https://www.linkedin.com/in/ian-ramy/",
		icon: LinkedIn,
		label: "LinkedIn",
	},
	{
		href: "https://www.discordapp.com//users/1366810539854008360/",
		icon: Discord,
		label: "Discord",
	},
];

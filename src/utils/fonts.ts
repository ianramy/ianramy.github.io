// src/lib/fonts.ts
import {
	Anton,
	Bebas_Neue,
	Orbitron,
	Permanent_Marker,
	Playfair_Display,
	Space_Mono,
} from "next/font/google";

// Elegant editorial serif, high-contrast strokes, italic-capable
const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "700", "900"],
	style: ["italic", "normal"],
	variable: "--font-playfair",
});

// Genuine handwritten marker script — reads nothing like a "font", looks scrawled
const permanentMarker = Permanent_Marker({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-marker",
});

// Ultra-heavy blocky slab — architectural, brutalist
const anton = Anton({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-anton",
});

// Geometric, futuristic, technical/sci-fi
const orbitron = Orbitron({
	subsets: ["latin"],
	weight: ["400", "700", "900"],
	variable: "--font-orbitron",
});

// Precise technical monospace — terminal/code feel
const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-space-mono",
});

// Tall, condensed, dramatic poster-style
const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bebas",
});

// Combine into one string to spread onto <body> or a wrapper in layout.tsx
export const allFontVariables = [
	playfair.variable,
	permanentMarker.variable,
	anton.variable,
	orbitron.variable,
	spaceMono.variable,
	bebasNeue.variable,
].join(" ");

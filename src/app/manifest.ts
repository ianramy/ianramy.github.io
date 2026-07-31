// src/app/manifest.ts

export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ian Ramy | Portfolio",
		short_name: "Ian Ramy",
		description: "Software Engineer, Data Scientist, and CyberSec Specialist.",
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [
			{
				src: "/images/logo-black.jpg",
				sizes: "192x192",
				type: "image/jpeg",
			},
			{
				src: "/images/logo-black.jpg",
				sizes: "512x512",
				type: "image/jpeg",
			},
		],
	};
}

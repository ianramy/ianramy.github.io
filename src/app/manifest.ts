// src/app/manifest.ts

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ian Ramy | Portfolio",
		short_name: "Ian Ramy",
		description:
			"I am a Full-Stack Secure Data Engineer bridging the critical gaps between scalable software architecture, machine learning, and zero-trust security. I build resilient, high-performance web systems using Next.js and React for the frontend & Python and Rust for the backend, engineered specifically to extract actionable intelligence from big data while remaining fortified against emerging cyber threats. Whether leading development at MwangaLabs or maintaining open-source infrastructure like Rustywoof, I design architectures that protect data integrity without compromising user experience or computational speed.",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [
			{
				src: "/images/icon.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/images/icon.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}

// src/app/robots.ts

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/private/"],
			},
			{
				userAgent: [
					"GPTBot",
					"ChatGPT-User",
					"Google-Extended",
					"ClaudeBot",
					"anthropic-ai",
					"PerplexityBot",
					"CCBot",
				],
				allow: "/",
				disallow: ["/api/", "/private/"],
			},
		],
		sitemap: "https://ianramy.co.ke/sitemap.xml",
		host: "https://ianramy.co.ke",
	};
}

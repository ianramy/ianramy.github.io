// src/app/robots.ts

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/private/"],
		},
		sitemap: "https://ianramy.co.ke/sitemap.xml",
	};
}

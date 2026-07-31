// src/app/robots.ts

export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/private/"],
		},
		sitemap: "https://www.ianramy.co.ke/sitemap.xml",
	};
}

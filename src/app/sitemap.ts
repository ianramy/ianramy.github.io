// src/app/sitemap.ts

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ianramy.co.ke";
	const lastModified = new Date("2026-09-04");

	return [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/rustywoof`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}

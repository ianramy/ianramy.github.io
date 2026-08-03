import type { NextConfig } from "next";
import {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} from "next/constants";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	turbopack: {},
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default async (phase: string): Promise<NextConfig> => {
	// Only inject Serwist during the dev server and production build phases
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
		// Dynamically import Serwist to prevent Turbopack conflicts
		const withSerwist = (await import("@serwist/next")).default({
			swSrc: "src/app/sw.ts",
			swDest: "public/sw.js",
			// Disables Serwist in development to prevent caching issues,
			// but enables it for the production build
			disable: phase === PHASE_DEVELOPMENT_SERVER,
		});

		return withSerwist(nextConfig);
	}

	return nextConfig;
};

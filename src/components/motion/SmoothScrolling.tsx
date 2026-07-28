// src/components/motion/SmoothScrolling.tsx

"use client";

import { useEffect } from "react";
import { initLenis } from "@/utils";

export default function SmoothScrolling({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Initialize the smooth scroll engine
		const lenis = initLenis();

		// Cleanup on unmount to prevent memory leaks in the RAF loop
		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}

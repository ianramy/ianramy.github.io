// src/hooks/useScrollReveal.ts

"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.1) {
	const ref = useRef<HTMLDivElement>(null);
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIntersecting(true);
					// Unobserve after revealing to prevent layout thrashing
					if (ref.current) observer.unobserve(ref.current);
				}
			},
			{ threshold },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isIntersecting };
}

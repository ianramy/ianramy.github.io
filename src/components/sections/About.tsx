// src/components/sections/About.tsx

"use client";

import Image from "next/image";
import { aboutFacets } from "@/data";

export default function About() {
	return (
		<div id="about" className="relative z-10 bg-(--color-bg-base)">
			{aboutFacets.map((facet, idx) => (
				<section
					key={facet.title}
					className="sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden border-b border-(--color-border-grid)"
					style={{
						backgroundColor: "var(--color-bg-base)",
						zIndex: 10 + idx,
					}}
				>
					<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="flex flex-col gap-6 order-2 md:order-1">
							<span className="font-mono text-xs text-(--color-accent) uppercase tracking-widest">
								0{idx + 1} / Method
							</span>
							<h2 className="text-4xl md:text-6xl font-heading text-(--color-text-primary) leading-tight">
								{facet.title}
							</h2>
							<p className="font-body text-(--color-text-secondary) text-lg md:text-xl max-w-md leading-relaxed">
								{facet.text}
							</p>
						</div>

						<div className="relative w-full aspect-4/3 order-1 md:order-2 overflow-hidden bg-(--color-border-grid)">
							<Image
								src={facet.img}
								alt={facet.title}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover object-center saturate-50 contrast-[0.85] opacity-80 hover:saturate-110 hover:contrast-100 hover:opacity-100 transition-all duration-700 ease-signature"
							/>
						</div>
					</div>
				</section>
			))}
		</div>
	);
}

// src/components/sections/WorkReel.tsx

"use client";

import Image from "next/image";
import { projects } from "@/data";

export default function WorkReel() {
	return (
		<section
			id="projects"
			className="relative bg-(--color-bg-base) py-24 px-6 md:px-12"
		>
			<div className="max-w-7xl mx-auto mb-16">
				<span className="font-mono text-xs text-(--color-accent) uppercase tracking-widest block mb-2">
					Selected Systems
				</span>
				<h2 className="text-4xl md:text-6xl font-heading text-(--color-text-primary) uppercase tracking-heading">
					Featured Engineering
				</h2>
			</div>

			{/* Vertical Stacking Container */}
			<div className="max-w-7xl mx-auto flex flex-col gap-12 pb-24">
				{projects.map((project, idx) => (
					<div
						key={project.id}
						className="sticky top-[12vh] w-full min-h-[70vh] rounded-none bg-(--color-bg-base) p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500"
						style={{ zIndex: 10 + idx }}
					>
						<div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-8">
							<div>
								<span className="font-mono text-xs text-(--color-text-secondary) uppercase tracking-widest">
									0{idx + 1} / {project.role}
								</span>
								<h3 className="text-3xl md:text-5xl font-heading text-(--color-text-primary) tracking-heading mt-2">
									{project.title}
								</h3>
							</div>
							<p className="font-mono text-xs md:text-sm text-(--color-text-secondary) max-w-sm">
								{project.desc}
							</p>
						</div>
						{project.link && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="font-mono text-sm text-(--color-text-secondary) uppercase tracking-widest"
							>
								View Project
							</a>
						)}

						<div className="relative w-full h-[80vh] md:h-[50vh] overflow-hidden bg-(--color-border-grid)">
							<Image
								src={project.img}
								alt={project.title}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover object-center saturate-150 contrast-110 opacity-150 hover:saturate-150 hover:contrast-100 hover:opacity-150 transition-all duration-700 ease-signature"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

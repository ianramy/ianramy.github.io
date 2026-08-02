// src/components/sections/Skills.tsx

"use client";

import { useState } from "react";
import { skillGroups } from "@/data";

export default function Skills() {
	const [activeCategory, setActiveCategory] = useState<number>(0);

	return (
		<section
			id="skills"
			className="relative z-30 bg-(--color-bg-base) min-h-screen w-full py-24 px-6 md:px-12 border-t border-(--color-border-grid)"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-(--color-border-grid)">
					<div>
						<span className="font-mono text-xs text-(--color-accent) uppercase tracking-widest block mb-2">
							Capabilities & Experience
						</span>
						<h2 className="text-4xl md:text-7xl font-heading text-(--color-text-primary) uppercase tracking-heading">
							Technical Arsenal
						</h2>
					</div>
					<p className="font-mono text-xs md:text-sm text-(--color-text-secondary) max-w-md mt-4 md:mt-0">
						A comprehensive engine driving resilient systems, scalable backend
						infrastructure, and precise interfaces.
					</p>
				</div>

				{/* Modular Category Tabs */}
				<div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-(--color-border-grid)">
					{skillGroups.map((group, idx) => (
						<button
							type="button"
							key={group.category}
							onClick={() => setActiveCategory(idx)}
							className={`font-mono text-xs md:text-sm uppercase tracking-wider px-4 py-2 transition-all whitespace-nowrap ${
								activeCategory === idx
									? "bg-(--color-text-primary) text-(--color-bg-base) font-bold"
									: "text-(--color-text-secondary) hover:text-(--color-text-primary)"
							}`}
						>
							{group.category}
						</button>
					))}
				</div>

				{/* High-Density Skill Items Display */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillGroups[activeCategory].items.map((skill) => (
						<div
							key={skill.title}
							className="group relative p-6 border border-(--color-border-grid) bg-(--color-bg-base) hover:border-(--color-text-primary) transition-colors duration-300 flex flex-col justify-between h-full"
						>
							<div>
								{/* Header: Icon + Title + Experience Badge */}
								<div className="flex items-center justify-between gap-4 mb-4">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 relative shrink-0 flex items-center justify-center saturate-70 contrast-[0.85] opacity-80 hover:saturate-120 hover:contrast-100 hover:opacity-100 transition-all">
											{skill.icon}
										</div>
										<h3 className="text-lg font-heading text-(--color-text-primary)">
											{skill.title}
										</h3>
									</div>

									<span className="font-mono text-[10px] px-2 py-1 border border-(--color-border-grid) text-(--color-accent) uppercase tracking-wider">
										{skill.years}
									</span>
								</div>

								{/* Description */}
								<p className="font-mono text-xs text-(--color-text-secondary) leading-relaxed">
									{skill.description}
								</p>
							</div>

							{/* Minimalist bottom accent line */}
							<div className="w-full h-px bg-(--color-border-grid) group-hover:bg-(--color-text-primary) transition-colors mt-6" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

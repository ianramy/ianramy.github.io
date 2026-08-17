// src/components/sections/Skills.tsx

"use client";

import {
	AnimatePresence,
	motion,
	useInView,
	useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import { SkillIcon } from "@/components";
import { skillGroups } from "@/data";

const ITEM_DWELL_MS = 3400;
const REEL_SPACING = 85;

// Center stage for the actively featured item
const CENTER_POS = { top: 35, left: 50 };

// Anchors pushed to the far edges/corners to leave the center column completely empty
const SCATTER_ANCHORS = [
	{ top: 12, left: 15 },
	{ top: 12, left: 85 },
	{ top: 75, left: 15 },
	{ top: 75, left: 85 },
	{ top: 45, left: 8 },
	{ top: 45, left: 92 },
];

function circularOffset(idx: number, active: number, total: number) {
	let diff = idx - active;
	if (diff > total / 2) diff -= total;
	if (diff < -total / 2) diff += total;
	return diff;
}

function floatParams(seed: number) {
	return {
		duration: 3.4 + (seed % 3) * 0.55,
		delay: (seed % 4) * 0.18,
		distance: 8 + (seed % 3) * 4,
	};
}

export default function Skills() {
	const [catIndex, setCatIndex] = useState(0);
	const [itemIndex, setItemIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { amount: 0.35 });
	const prefersReducedMotion = useReducedMotion();

	const totalCats = skillGroups.length;
	const activeCategory = skillGroups[catIndex];
	const activeItems = activeCategory.items;

	const jumpToCategory = (idx: number) => {
		setCatIndex(idx);
		setItemIndex(0);
	};

	// Triggers strictly when the visual CSS bar finishes filling
	const handleNextItem = () => {
		if (itemIndex < activeItems.length - 1) {
			setItemIndex((i) => i + 1);
		} else {
			setItemIndex(0);
			setCatIndex((c) => (c + 1) % totalCats);
		}
	};

	return (
		<section
			ref={sectionRef}
			id="skills"
			className="relative z-30 bg-(--color-bg-base) min-h-screen w-full py-20 md:py-28 px-4 md:px-12 overflow-hidden"
		>
			<style>{`
				@keyframes fillProgress {
					0% { transform: scaleX(0); }
					100% { transform: scaleX(1); }
				}
			`}</style>

			{/* Ambient glow */}
			<motion.div
				aria-hidden
				animate={
					prefersReducedMotion
						? undefined
						: { opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }
				}
				transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
				className="pointer-events-none absolute right-[-10%] top-1/3 h-130 w-130 rounded-full bg-(--color-accent)/10 blur-[120px]"
			/>

			<div className="relative mx-auto h-full flex flex-col">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 pb-4 md:pb-8"
				>
					<div>
						<span className="font-mono text-xs text-(--color-accent) uppercase tracking-widest block mb-2">
							Capabilities & Experience
						</span>
						<h2 className="text-3xl md:text-7xl font-heading text-(--color-text-primary) uppercase tracking-heading">
							Technical Arsenal
						</h2>
					</div>
					<p className="font-mono text-[10px] md:text-sm text-(--color-text-secondary) max-w-md mt-4 md:mt-0">
						A comprehensive engine driving resilient systems, scalable backend
						infrastructure, and precise interfaces.
					</p>
				</motion.div>

				<section
					aria-label="Interactive skills display"
					className="grid grid-cols-[35%_65%] md:grid-cols-[0.35fr_1.65fr] gap-2 md:gap-16 lg:gap-24 items-center flex-1 min-h-112.5 md:min-h-150"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					onTouchStart={() => setPaused(true)}
					onTouchEnd={() => setPaused(false)}
				>
					{/* LEFT — Category Revolver with drag */}
					<div className="relative h-full flex flex-col justify-center border-r border-(--color-text-secondary)/10 md:border-none pr-4 md:pr-0">
						<span className="font-mono text-[10px] md:text-[11px] text-(--color-text-secondary)/60 tracking-widest block mb-6 md:mb-10 text-center md:text-left">
							{String(catIndex + 1).padStart(2, "0")} /{" "}
							{String(totalCats).padStart(2, "0")}
						</span>

						<motion.div
							drag="y"
							dragConstraints={{ top: 0, bottom: 0 }}
							onDragEnd={(_, info) => {
								if (info.offset.y < -30)
									jumpToCategory((catIndex + 1) % totalCats);
								if (info.offset.y > 30)
									jumpToCategory((catIndex - 1 + totalCats) % totalCats);
							}}
							className="relative h-60 md:h-75 w-full cursor-grab active:cursor-grabbing z-20"
							style={{ perspective: prefersReducedMotion ? undefined : 900 }}
						>
							{skillGroups.map((group, idx) => {
								const offset = circularOffset(idx, catIndex, totalCats);
								const isActive = offset === 0;

								if (Math.abs(offset) > 1) return null;

								return (
									<button
										type="button"
										key={group.category}
										onClick={() => jumpToCategory(idx)}
										style={{
											transform: prefersReducedMotion
												? undefined
												: `translateY(${offset * REEL_SPACING}px) rotateX(${
														offset * -20
													}deg)`,
											filter: `blur(${Math.abs(offset) * 1.5}px)`,
										}}
										className="absolute w-full top-1/2 -translate-y-1/2 origin-left text-right md:text-left transition-all duration-500 ease-out"
									>
										<span
											style={{
												opacity: isActive
													? 1
													: Math.max(0.2, 1 - Math.abs(offset) * 0.4),
											}}
											className={`block font-heading uppercase tracking-heading transition-all duration-500 ${
												isActive
													? "text-xl md:text-4xl lg:text-5xl text-(--color-text-primary)"
													: "text-xs md:text-xl lg:text-2xl text-(--color-text-secondary)"
											}`}
										>
											{group.category}
										</span>
									</button>
								);
							})}
						</motion.div>

						<span className="block h-px w-12 md:w-16 bg-linear-to-r from-(--color-accent) to-transparent mt-8 md:block" />
					</div>

					{/* RIGHT — Floating icon field & Descriptions */}
					<div className="relative h-112.5 md:h-150 w-full flex items-center justify-center">
						<AnimatePresence mode="popLayout">
							{activeItems.map((item, idx) => {
								const isFocused = idx === itemIndex;
								const anchor = isFocused
									? CENTER_POS
									: SCATTER_ANCHORS[idx % SCATTER_ANCHORS.length];

								const { duration, delay, distance } = floatParams(idx);

								return (
									<motion.div
										key={`${catIndex}-${item.title}`}
										className="absolute"
										initial={{
											top: "50%",
											left: "50%",
											scale: 0,
											opacity: 0,
											x: "-50%",
											y: "-50%",
										}}
										animate={{
											top: `${anchor.top}%`,
											left: `${anchor.left}%`,
											scale: 1,
											opacity: 1,
											x: "-50%",
											y: "-50%",
											zIndex: isFocused ? 30 : 10,
										}}
										exit={{
											top: "50%",
											left: "50%",
											scale: 0,
											opacity: 0,
											x: "-50%",
											y: "-50%",
										}}
										transition={{
											type: "spring",
											stiffness: 180,
											damping: 20,
											mass: 1,
										}}
									>
										<motion.div
											animate={
												prefersReducedMotion
													? undefined
													: { y: [0, -distance, 0] }
											}
											transition={{
												duration,
												delay,
												repeat: Infinity,
												ease: "easeInOut",
											}}
											className="relative flex flex-col items-center cursor-pointer"
											onClick={() => setItemIndex(idx)}
										>
											<motion.div
												animate={{
													scale: isFocused ? 1.5 : 0.65,
													opacity: isFocused ? 1 : 0.25,
												}}
												transition={{ duration: 0.5, ease: "easeOut" }}
												className="relative z-20"
											>
												<SkillIcon
													src={item.icon}
													alt={item.title}
													invertOnDark={item.invertOnDark}
													className="w-12 h-12 md:w-16 md:h-16"
												/>
											</motion.div>

											{isFocused && !prefersReducedMotion && (
												<motion.div
													animate={{
														scale: [1, 1.4, 1],
														opacity: [0.35, 0, 0.35],
													}}
													transition={{
														duration: 2.4,
														repeat: Infinity,
														ease: "easeInOut",
													}}
													className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 -z-10 rounded-full bg-(--color-accent)/40 blur-xl"
												/>
											)}

											<AnimatePresence>
												{isFocused && (
													<motion.div
														initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
														animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
														exit={{ opacity: 0, y: 15, filter: "blur(5px)" }}
														transition={{
															duration: 0.4,
															delay: 0.15,
															ease: "easeOut",
														}}
														className="absolute top-[130%] left-1/2 -translate-x-1/2 w-50 md:w-[320px] text-center pointer-events-none z-30"
													>
														<h3 className="text-lg md:text-2xl font-heading text-(--color-text-primary) mb-2">
															{item.title}
														</h3>
														<div className="mb-3">
															<span className="inline-block font-mono text-[9px] md:text-[10px] text-(--color-bg-base) bg-(--color-accent) px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
																{item.years}
															</span>
														</div>
														<p className="font-mono text-[11px] md:text-sm text-(--color-text-secondary) leading-relaxed">
															{item.description}
														</p>
													</motion.div>
												)}
											</AnimatePresence>
										</motion.div>
									</motion.div>
								);
							})}
						</AnimatePresence>

						<div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-40 w-full max-w-45 md:max-w-70 px-2">
							{activeItems.map((item, idx) => {
								const isActive = idx === itemIndex;
								const isPast = idx < itemIndex;

								return (
									<button
										type="button"
										key={`tracker-${catIndex}-${item.title}`}
										onClick={() => setItemIndex(idx)}
										aria-label={`Show ${item.title}`}
										className="h-1 md:h-1.5 bg-(--color-text-secondary)/20 rounded-full flex-1 overflow-hidden transition-all duration-300 hover:bg-(--color-text-secondary)/40"
									>
										<div
											className="h-full bg-(--color-accent) origin-left"
											style={{
												transform: isPast ? "scaleX(1)" : "scaleX(0)",
												animationName: isActive ? "fillProgress" : "none",
												animationDuration: `${ITEM_DWELL_MS}ms`,
												animationTimingFunction: "linear",
												animationPlayState:
													!isInView || paused ? "paused" : "running",
												animationFillMode: "forwards",
											}}
											onAnimationEnd={(e) => {
												if (e.animationName === "fillProgress" && isActive) {
													handleNextItem();
												}
											}}
										/>
									</button>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

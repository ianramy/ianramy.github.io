// src/components/sections/Hero.tsx

"use client";

import { motion, type Variants } from "framer-motion";

export default function Hero() {
	// Explicitly define as a 4-number tuple to satisfy Framer Motion's cubic-bezier type
	const customEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

	// Parent orchestrator: handles the staggering of children
	const containerVariants: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	// 3D Masked Line Reveal for the massive typography
	const lineVariants: Variants = {
		hidden: { y: "100%", rotateX: -20, opacity: 0 },
		visible: {
			y: "0%",
			rotateX: 0,
			opacity: 1,
			transition: { duration: 1.2, ease: customEase },
		},
	};

	// Cinematic blur-to-focus for the technical roles
	const blurFadeVariants: Variants = {
		hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: { duration: 1, ease: customEase },
		},
	};

	return (
		<section
			id="home"
			className="h-screen w-full flex flex-col items-center justify-center bg-(--color-bg-base) border-b border-(--color-border-grid) sticky top-0 z-0"
		>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="text-center w-full max-w-5xl px-6"
			>
				<h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-heading uppercase tracking-heading mb-6 perspective-[1000px]">
					<div className="overflow-hidden pb-2">
						<motion.div
							variants={lineVariants}
							className="origin-top text-(--color-text-primary)"
						>
							Architecting
						</motion.div>
					</div>
					<div className="overflow-hidden pb-2 md:pb-4">
						<motion.div
							variants={lineVariants}
							// Visually separating the second word with a secondary color maps perfectly to the architectural vibe
							className="origin-top text-(--color-text-secondary)"
						>
							Resilience
						</motion.div>
					</div>
				</h1>

				<motion.div
					variants={blurFadeVariants}
					className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-xs md:text-sm text-(--color-text-secondary) uppercase tracking-widest mt-8"
				>
					<p>Software Engineer </p>
					{/* Pulsing Accent Dot */}
					<motion.span
						initial={{ scale: 0.8, opacity: 0.5 }}
						animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						className="hidden md:block w-1.5 h-1.5 bg-(--color-accent) rounded-full"
					/>
					<p>Data Scientist</p>

					<motion.span
						initial={{ scale: 0.8, opacity: 0.5 }}
						animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						className="hidden md:block w-1.5 h-1.5 bg-(--color-accent) rounded-full"
					/>
					<p>CyberSecurity Analyst</p>

					<motion.span
						initial={{ scale: 0.8, opacity: 0.5 }}
						animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						className="hidden md:block w-1.5 h-1.5 bg-(--color-accent) rounded-full"
					/>

					<p>Sole-Maintainer, RustyWoof</p>

					<motion.span
						initial={{ scale: 0.8, opacity: 0.5 }}
						animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: "linear",
							delay: 1.5,
						}}
						className="hidden md:block w-1.5 h-1.5 bg-(--color-accent) rounded-full"
					/>

					<p>Co-Founder / CTO, MwangaLabs</p>
				</motion.div>
			</motion.div>
		</section>
	);
}

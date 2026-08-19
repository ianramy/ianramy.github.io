// src/components/sections/Hero.tsx

"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const FONT_CLASSES = [
	"font-[family-name:var(--font-playfair)] italic font-normal lowercase text-[1.05em]",
	"font-[family-name:var(--font-marker)] normal-case text-[0.95em] tracking-normal",
	"font-[family-name:var(--font-anton)] uppercase tracking-tight text-[1em]",
	"font-[family-name:var(--font-orbitron)] font-black uppercase tracking-wider text-[0.9em]",
	"font-[family-name:var(--font-space-mono)] font-bold uppercase text-[0.9em]",
	"font-[family-name:var(--font-bebas)] uppercase tracking-wide text-[1.15em]",
];

const SLOT_CHARS =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

function ScrambleLetter({
	char,
	index,
	startDelay,
}: {
	char: string;
	index: number;
	startDelay: number;
}) {
	const [fontClass, setFontClass] = useState(FONT_CLASSES[0]);
	const [settled, setSettled] = useState(false);

	useEffect(() => {
		if (char === " ") return;

		let flickerId: ReturnType<typeof setInterval>;
		let settleId: ReturnType<typeof setTimeout>;
		let loopId: ReturnType<typeof setInterval>;

		const runScramble = () => {
			setSettled(false);

			flickerId = setInterval(() => {
				setFontClass(
					FONT_CLASSES[Math.floor(Math.random() * FONT_CLASSES.length)],
				);
			}, 200);

			settleId = setTimeout(
				() => {
					clearInterval(flickerId);
					setSettled(true);
				},
				1000 + Math.random() * 1000,
			);
		};

		const startId = setTimeout(
			() => {
				runScramble();
				loopId = setInterval(() => {
					runScramble();
				}, 4000);
			},
			startDelay + index * 100,
		);

		return () => {
			clearTimeout(startId);
			clearTimeout(settleId);
			clearInterval(flickerId);
			clearInterval(loopId);
		};
	}, [char, index, startDelay]);

	if (char === " ")
		return <span className="inline-block w-[0.4em]">&nbsp;</span>;

	return (
		<span
			className={`inline-block transition-opacity duration-300 ${settled ? "" : fontClass}`}
			style={{ minWidth: settled ? "auto" : "0.85em", textAlign: "center" }}
		>
			{char}
		</span>
	);
}

function FontScrambleText({
	text,
	startDelay = 0,
}: {
	text: string;
	startDelay?: number;
}) {
	const charItems = useMemo(() => {
		return text.split("").map((char, index) => ({
			char,
			index,
			id: `scramble-${text}-${index}`,
		}));
	}, [text]);

	return (
		<>
			{charItems.map((item) => (
				<ScrambleLetter
					key={item.id}
					char={item.char}
					index={item.index}
					startDelay={startDelay}
				/>
			))}
		</>
	);
}

function SlotChar({ char, index }: { char: string; index: number }) {
	// 1. Introduce hydration flag to prevent server/client mismatches
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const { column, spinDirection, duration } = useMemo(() => {
		// 2. Return completely deterministic data during SSR and initial hydration
		if (!isMounted || char === " ") {
			return {
				column: [{ char, id: `stable-${char}` }],
				spinDirection: 1,
				duration: 0,
			};
		}

		// 3. Post-hydration: Safely execute randomized slot logic
		const spins = 12 + Math.floor(Math.random() * 8);
		const chars = Array.from(
			{ length: spins },
			() => SLOT_CHARS[Math.floor(Math.random() * SLOT_CHARS.length)],
		);

		const dir = Math.random() > 0.5 ? 1 : -1;

		if (dir === 1) {
			chars.push(char);
		} else {
			chars.unshift(char);
		}

		const columnObjects = chars.map((c, i) => ({
			char: c,
			id: `slot-${char}-${i}`,
		}));

		return {
			column: columnObjects,
			spinDirection: dir,
			duration: 1.2 + Math.random() * 0.5,
		};
	}, [char, isMounted]);

	if (char === " ")
		return <span className="inline-block w-[0.4em]">&nbsp;</span>;

	const distance = (column.length - 1) * 1.5;
	const startY = spinDirection === 1 ? "0em" : `-${distance}em`;
	const endY = spinDirection === 1 ? `-${distance}em` : "0em";

	return (
		<div className="relative inline-flex flex-col overflow-hidden h-[1.5em] justify-start leading-[1.5em]">
			<motion.div
				initial={{ y: startY }}
				animate={{ y: endY }}
				transition={{
					duration: duration,
					ease: [0.25, 1, 0.5, 1],
					delay: index * 0.04,
				}}
				className="flex flex-col items-center"
			>
				{column.map((item) => (
					<span
						key={item.id}
						className="flex items-center justify-center h-[1.5em]"
					>
						{item.char}
					</span>
				))}
			</motion.div>
		</div>
	);
}

const ROLES = [
	"Software Engineer",
	"Data Scientist",
	"CyberSecurity Analyst",
	"Sole-Maintainer, RustyWoof",
	"Co-Founder / CTO, MwangaLabs",
];

function RoleCycler() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % ROLES.length);
		}, 7500);
		return () => clearInterval(interval);
	}, []);

	const currentRoleChars = useMemo(() => {
		return ROLES[index].split("").map((char, idx) => ({
			char,
			index: idx,
			id: `role-${index}-${idx}`,
		}));
	}, [index]);

	return (
		<div className="flex items-center gap-3 md:gap-4">
			<motion.span
				initial={{ scale: 0.8, opacity: 0.5 }}
				animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
				transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
				className="w-1.5 h-1.5 md:w-2 md:h-2 bg-(--color-accent) rounded-full shrink-0"
			/>

			<div className="relative h-[1.5em] flex items-center overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={ROLES[index]}
						initial={{ opacity: 0, filter: "blur(6px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						exit={{
							opacity: 0,
							filter: "blur(6px)",
							transition: { duration: 0.2 },
						}}
						className="flex"
					>
						{currentRoleChars.map((item) => (
							<SlotChar key={item.id} char={item.char} index={item.index} />
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

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

	const LINE_1_SCRAMBLE_DELAY = 400;
	const LINE_2_SCRAMBLE_DELAY = 550;

	return (
		<section
			id="home"
			className="min-h-dvh w-full flex flex-col items-center justify-center bg-(--color-bg-base) sticky top-0 z-0"
		>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="text-center w-full px-4 md:px-6 pb-[10vh]"
			>
				<h1 className="text-[10vw] md:text-[8vw] leading-none font-heading uppercase tracking-heading mb-6 perspective-[1000px] whitespace-nowrap">
					<div className="overflow-hidden h-[1.3em] flex items-end justify-center pb-2">
						<motion.div
							variants={lineVariants}
							className="origin-top text-(--color-text-primary) leading-none"
						>
							<FontScrambleText
								text="Architecting"
								startDelay={LINE_1_SCRAMBLE_DELAY}
							/>
						</motion.div>
					</div>

					<div className="overflow-hidden h-[1.3em] flex items-end justify-center pb-2 md:pb-4">
						<motion.div
							variants={lineVariants}
							className="origin-top text-(--color-text-secondary) leading-none"
						>
							<FontScrambleText
								text="Resilience"
								startDelay={LINE_2_SCRAMBLE_DELAY}
							/>
						</motion.div>
					</div>
				</h1>

				<motion.div
					variants={blurFadeVariants}
					className="flex items-center justify-center font-mono text-sm md:text-base lg:text-lg text-(--color-text-secondary) uppercase tracking-widest mt-6 md:mt-10"
				>
					<RoleCycler />
				</motion.div>
			</motion.div>
		</section>
	);
}

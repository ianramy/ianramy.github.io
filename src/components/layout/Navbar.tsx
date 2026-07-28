"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navLinks, socialLinks } from "@/data/links"; // Adjust to "@/data" if needed
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const router = useRouter();
	const pathname = usePathname();

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				if (window.location.hash) {
					history.replaceState(null, "", window.location.pathname);
				}
			}, 600);
		}
	};

	const handleNavClick = (sectionId: string) => {
		if (pathname === "/") {
			scrollToSection(sectionId);
		} else {
			sessionStorage.setItem("scrollToSection", sectionId);
			router.push("/");
		}
		setMenuOpen(false);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
			className="sticky top-0 z-40 w-full bg-white dark:bg-black text-black dark:text-white border-b border-black/10 dark:border-white/10 transition-colors duration-500"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				<div className="flex justify-between items-center h-24">
					{/* Logo */}
					<button
						type="button"
						onClick={() => handleNavClick("home")}
						className="flex-1 flex justify-start items-center"
						aria-label="Scroll to Home"
					>
						<Image
							src="/images/logo-black.jpg"
							alt="Logo"
							width={60}
							height={60}
							className="dark:hidden"
							priority
						/>
						<Image
							src="/images/logo-black.jpg"
							alt="Logo"
							width={60}
							height={60}
							className="hidden dark:block"
							priority
						/>
					</button>

					{/* Desktop Nav */}
					<div className="hidden md:flex flex-1 justify-center items-center space-x-12 font-mono text-sm uppercase tracking-widest">
						{navLinks.map((link) => (
							<button
								type="button"
								key={link.href}
								onClick={() => handleNavClick(link.href.replace("#", ""))}
								className="relative group hover:text-black/60 dark:hover:text-white/60 transition-colors"
							>
								{link.label}
							</button>
						))}
					</div>

					{/* Right Controls: Theme Toggle + Socials */}
					<div className="hidden md:flex flex-1 justify-end items-center space-x-8">
						<button
							type="button"
							onClick={toggleTheme}
							aria-label="Toggle Theme"
							className="w-6 h-6 flex items-center justify-center hover:opacity-60 transition-opacity"
						>
							{theme === "dark" ? (
								<svg
									role="img"
									aria-labelledby="moon-title"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="w-5 h-5"
								>
									<title id="moon-title">Switch to Light Mode</title>
									<circle cx="12" cy="12" r="5" />
									<path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
								</svg>
							) : (
								<svg
									role="img"
									aria-labelledby="sun-title"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="w-5 h-5"
								>
									<title id="sun-title">Switch to Dark Mode</title>
									<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
								</svg>
							)}
						</button>

						<div className="flex space-x-6">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-5 h-5 flex items-center justify-center transition-opacity hover:opacity-50"
								>
									{/* Screen Reader Only text perfectly satisfies Biome and WCAG */}
									<span className="sr-only">Follow on {social.label}</span>
									<div
										className="w-full h-full bg-black dark:bg-white"
										style={{
											maskImage: `url(${social.icon.src})`,
											WebkitMaskImage: `url(${social.icon.src})`,
											maskSize: "contain",
											maskRepeat: "no-repeat",
											WebkitMaskRepeat: "no-repeat",
										}}
									/>
								</a>
							))}
						</div>
					</div>

					{/* Mobile Toggle */}
					<button
						type="button"
						aria-label="Toggle Mobile Menu"
						className="md:hidden text-2xl font-mono uppercase"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? "CLOSE" : "MENU"}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "100vh" }}
						exit={{ height: 0 }}
						className="fixed top-24 left-0 w-full bg-white dark:bg-black overflow-hidden z-30 border-b border-black/10 dark:border-white/10"
					>
						<div className="flex flex-col items-center justify-center h-full space-y-8 pb-24 font-mono text-xl uppercase tracking-widest">
							{navLinks.map((link) => (
								<button
									type="button"
									key={link.href}
									onClick={() => handleNavClick(link.href.replace("#", ""))}
									className="hover:opacity-50 transition-opacity"
								>
									{link.label}
								</button>
							))}
							<button
								type="button"
								onClick={toggleTheme}
								className="mt-8 text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors"
							>
								TOGGLE {theme === "dark" ? "LIGHT" : "DARK"} MODE
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

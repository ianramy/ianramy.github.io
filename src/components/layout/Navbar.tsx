// src/components/layout/Navbar.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navLinks, socialLinks } from "@/data";
import { useTheme } from "@/hooks";

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
		setMenuOpen(false);
		setTimeout(() => {
			if (pathname === "/") {
				scrollToSection(sectionId);
			} else {
				sessionStorage.setItem("scrollToSection", sectionId);
				router.push("/");
			}
		}, 200);
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
			className="sticky bg-(--color-bg-base) top-0 z-40 w-full transition-colors duration-500"
		>
			<div className="w-full mx-auto px-4 md:px-8 backdrop-blur-3xl">
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
								className="relative group hover:opacity-60 transition-opacity"
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
									<span className="sr-only">Follow on {social.label}</span>
									<div
										className="w-full h-full bg-current"
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
						className="md:hidden flex items-center justify-center"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="absolute top-24 left-0 w-full overflow-hidden z-30 backdrop-blur-2xl"
					>
						<div className="flex flex-col items-center justify-center py-8 space-y-8 font-mono text-xl uppercase tracking-widest">
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
								onClick={() => {
									toggleTheme();
									setMenuOpen(false);
								}}
								className="mt-8 text-sm transition-colors"
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

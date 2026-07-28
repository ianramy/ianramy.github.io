// src/app/page.tsx

import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import WorkReel from "@/components/sections/WorkReel";

export default function PortfolioHome() {
	return (
		<main className="min-h-screen selection:bg-(--color-accent) selection:text-black">
			<Hero />
			<About />
			<Skills />
			<WorkReel />
		</main>
	);
}

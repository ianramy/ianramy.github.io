// src/app/page.tsx

import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import WorkReel from "@/components/sections/WorkReel";

export default function PortfolioHome() {
	return (
		<main className="min-h-screen selection:bg-(--color-accent) selection:text-black">
			<section id="home">
				<Hero />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="projects">
				<WorkReel />
			</section>
		</main>
	);
}

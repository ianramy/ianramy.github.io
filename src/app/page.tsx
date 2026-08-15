// src/app/page.tsx

import { About, Hero, Skills, WorkReel } from "@/components/";

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

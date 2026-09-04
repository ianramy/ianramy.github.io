// src/app/page.tsx

import dynamic from "next/dynamic";
import { Hero } from "@/components/";

const About = dynamic(() => import("@/components/").then((mod) => mod.About));
const Skills = dynamic(() => import("@/components/").then((mod) => mod.Skills));
const WorkReel = dynamic(() =>
	import("@/components/").then((mod) => mod.WorkReel),
);

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

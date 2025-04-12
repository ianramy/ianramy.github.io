// src/pages/About.jsx

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import HeroSection from "../components/HeroSection";
import OSSImage from "../assets/images/opensource.jpg";
import PoetryImage from "../assets/images/poetry.jpg";
import RubicImage from "../assets/images/rubic.jpg";
import HackathonImage from "../assets/images/hackathon.jpg";

const About = () => {
	const sections = [
    {
        title: "Open Source Contributor",
        text: `Contributing to open-source projects allows me to collaborate with developers across the globe, 
    improve widely-used tools, and stay current with emerging best practices. 

    It's an opportunity to engage in peer review, enhance code quality, and learn scalable patterns in real production software.

    Open source is also where I refine my ability to write documentation, submit clean pull requests, and understand large codebases that mimic enterprise environments.`,
        image: OSSImage,
        alt: "Developer contributing code to open source on laptop",
        credit: "Photo by Civic Tech Innovation Network",
    },
    {
        title: "Poetry",
        text: `Writing poetry allows me to express emotion and imagination beyond the logical boundaries of code. 
    It sharpens my creativity and helps me build better UX by understanding narrative flow, rhythm, and tone.

    This creative outlet keeps me mentally balanced and provides a reflective break from technical problem solving.`,
        image: PoetryImage,
        alt: "Person writing poetry in a notebook beside a laptop",
        credit: "Photo by BBC Maestro"
    },
    {
        title: "Rubik's Cubing",
        text: `Solving and optimizing Rubik’s Cubes hones my spatial reasoning and algorithmic thinking. 
    I often use blindfolded solving or speedcubing to test memory and pattern recognition — useful when dealing with complex state transitions in code.

    It also reminds me that mastery comes from small optimizations and deliberate practice.`,
        image: RubicImage,
        alt: "Hands solving a Rubik's Cube quickly",
        credit: "Photo by New Scientist"
    },
    {
        title: "Hackathon Enthusiast",
        text: `I enjoy participating in hackathons to simulate high-pressure environments where speed and innovation matter. 
    These events push me to solve real-world problems using limited time and resources.

    I often serve as a lead developer or system designer, focusing on the architecture and deployment pipelines.

    Hackathons are an ideal ground for experimenting with new tools and validating ideas quickly through teamwork, prototyping, and pitching.`,
        image: HackathonImage,
        alt: "Team brainstorming ideas at a hackathon event with laptops open",
        credit: "Photo by DC Studio on FreePik",
    },
    ];


	return (
		<div className={styles.container}>
			<HeroSection
				title="About Me"
				subtitle="I'm passionate about building meaningful software, learning continuously, and engaging with the tech community beyond the 9-to-5."
			/>

			<div className={styles.sections}>
				{sections.map((section, index) => {
					const ref = useRef(null);
					const isInView = useInView(ref, { once: false, margin: "-100px" });

					return (
						<motion.div
							ref={ref}
							key={index}
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
							className={`${styles.splitSection} ${
								index % 2 === 1 ? styles.reverse : ""
							}`}
						>
							<div className={styles.imageContainer}>
								<img src={section.image} alt={section.alt} className={styles.image} />
                                <small className={styles.imageCredit}>{section.credit}</small>
							</div>
							<div className={styles.textContainer}>
								<h3>{section.title}</h3>
								<p>{section.text}</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default About;

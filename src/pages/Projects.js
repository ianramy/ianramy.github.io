// src/pages/Projects.js
import React, { useState } from "react";
import { ReactComponent as Ribbon } from "../assets/school-sharp.svg";
import { ReactComponent as Trophy } from "../assets/trophy_sharp.svg";
import { ReactComponent as Reward } from "../assets/medal-sharp.svg";
import styles from "./Projects.module.css";

const Projects = () => {
	const [flippedCard, setFlippedCard] = useState(null);

	const handleCardClick = (index) => {
		setFlippedCard(flippedCard === index ? null : index);
	};

	const cards = [
		{
			title: "Web Development Project",
			description:
				"Developed a responsive poem generator website using React and Flask.",
			link: "https://ianramy.github.io/Poem",
			category: "Project",
		},
		{
			title: "Capstone Project",
			description:
				"Implemented a school helpdesk that tackles problems by offering technical solutions.",
			link: "https://moringa-helpdesk.onrender.com",
			category: "Capstone Project",
		},
		{
			title: "Certification",
			description: "A Certified Full Stack Software Engineer from Moringa School.",
			link: "https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000D8ORE",
			category: "Academic",
		},
	];

	// Function to render the appropriate icon based on category
	const renderIcon = (category) => {
		if (category === "Project") return <Trophy className={styles.icon} />;
		if (category === "Capstone Project")
			return <Reward className={styles.icon} />;
		if (category === "Academic") return <Ribbon className={styles.icon} />;
		return null;
	};

	return (
		<div className={styles.container}>
			<h1>Projects & Achievements</h1>
			<div className={styles.grid}>
				{cards.map((card, index) => (
					<div
						key={index}
						className={`${styles.card} ${
							flippedCard === index ? styles.flipped : ""
						}`}
						onClick={() => handleCardClick(index)}>
						<div className={styles.cardFront}>
							{/* Render the icon based on category */}
							{renderIcon(card.category)}
							<h5 className={styles.cardTitle}>{card.title}</h5>
						</div>
						<div className={styles.cardBack}>
							<h5 className={styles.cardTitle}>{card.category}</h5>
							<p className={styles.cardText}>{card.description}</p>
							{/* Add clickable link */}
							{card.link && (
								<a
									href={card.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.cardLink}>
									Click here to view
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;

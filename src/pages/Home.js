// src/pages/Home.js
// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router
import styles from "./Home.module.css";
import { ReactComponent as AboutIcon } from "../assets/id_card_outline.svg";
import { ReactComponent as SkillsIcon } from "../assets/star_outline.svg";
import { ReactComponent as ProjectsIcon } from "../assets/layers_outline.svg";
import { ReactComponent as ContactIcon } from "../assets/send_outline.svg";

const Home = () => {
	const navigate = useNavigate();

	const cards = [
		{
			title: "About Me",
			description:
				"Get to know more about who I am, my passions, and what drives me.",
			icon: <AboutIcon className={styles.icon} />,
			link: "/about",
		},
		{
			title: "My Skills",
			description:
				"Explore the technical skills I have mastered, from Python to React.",
			icon: <SkillsIcon className={styles.icon} />,
			link: "/skills",
		},
		{
			title: "Projects",
			description:
				"Take a look at the projects I've worked on and the achievements I've made.",
			icon: <ProjectsIcon className={styles.icon} />,
			link: "/projects",
		},
		{
			title: "Contact",
			description: "If you wish to reach out to me via my socials or send a quick message.",
			icon: <ContactIcon className={styles.icon} />,
			link: "/contact",
		},
	];

	return (
		<div className={styles.container}>
			<h1>Welcome to My Portfolio</h1>
			<p>
				I'm Ian, a <strong>Full-Stack Software Engineer</strong> passionate
				about building scalable web applications and delivering impactful user
				experiences.
			</p>
			<div className={styles.cardContainer}>
				{cards.map((card, index) => (
					<div
						key={index}
						className={styles.card}
						onClick={() => navigate(card.link)}>
						<div className={styles.cardIcon}>{card.icon}</div>
						<h5 className={styles.cardTitle}>{card.title}</h5>
						<p className={styles.cardDescription}>{card.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

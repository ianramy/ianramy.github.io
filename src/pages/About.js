// src/pages/About.js
import React, { useState } from "react";
import styles from "./About.module.css";
import { ReactComponent as Game } from "../assets/logo_playstation.svg";
import { ReactComponent as Poetry } from "../assets/list_outline.svg";
import { ReactComponent as Ticket } from "../assets/ticket_outline.svg";

const About = () => {
	const [flippedCard, setFlippedCard] = useState(null);

	const handleCardClick = (index) => {
		setFlippedCard(flippedCard === index ? null : index);
	};

	return (
		<div className={styles.container}>
			<h1>About Me</h1>
			<p>
				I enjoy tackling challenging problems and creating impactful software.
				My experience spans various technologies, and I am always eager to learn
				and grow.
			</p>
			<div className={styles.cardContainer}>
				{/* Poetry Card */}
				<div
					className={`${styles.card} ${
						flippedCard === 0 ? styles.flipped : ""
					}`}
					onClick={() => handleCardClick(0)}>
					<div className={styles.cardFront}>
						<Poetry className={styles.icon} />
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Poetry</h5>
							<p className={styles.cardText}>
								Crafting words to express emotions and stories.
							</p>
						</div>
					</div>
					<div className={styles.cardBack}>
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Why Poetry?</h5>
							<p className={styles.cardText}>
								I enjoy exploring creativity through poetic expression. It’s a
								way to blend art with emotion.
							</p>
						</div>
					</div>
				</div>

				{/* Gaming Card */}
				<div
					className={`${styles.card} ${
						flippedCard === 1 ? styles.flipped : ""
					}`}
					onClick={() => handleCardClick(1)}>
					<div className={styles.cardFront}>
						<Game className={styles.icon} />
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Gaming</h5>
							<p className={styles.cardText}>
								Immersing in worlds of adventure and strategy.
							</p>
						</div>
					</div>
					<div className={styles.cardBack}>
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Favorite Genres</h5>
							<p className={styles.cardText}>
								RPGs, strategy games, and simulations challenge my
								problem-solving skills.
							</p>
						</div>
					</div>
				</div>

				{/* Sightseeing Card */}
				<div
					className={`${styles.card} ${
						flippedCard === 2 ? styles.flipped : ""
					}`}
					onClick={() => handleCardClick(2)}>
					<div className={styles.cardFront}>
						<Ticket className={styles.icon} />
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Movie</h5>
							<p className={styles.cardText}>
								Exploring new plotlines and cultures around the cinematic world.
							</p>
						</div>
					</div>
					<div className={styles.cardBack}>
						<div className={styles.cardBody}>
							<h5 className={styles.cardTitle}>Why Movies?</h5>
							<p className={styles.cardText}>
								Movie broadens my perspective and inspires my creativity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

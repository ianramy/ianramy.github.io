// src/pages/Skills.js
import React from "react";
import { ReactComponent as Python } from "../assets/logo_python.svg";
import { ReactComponent as Javascript } from "../assets/logo_javascript.svg";
import { ReactComponent as React2 } from "../assets/logo_react.svg";
import { ReactComponent as Github } from "../assets/logo_github.svg";
import { ReactComponent as Node } from "../assets/logo_nodejs.svg";
import { ReactComponent as Npm } from "../assets/logo_npm.svg";
import { ReactComponent as HTML } from "../assets/logo_html5.svg";
import { ReactComponent as CSS } from "../assets/logo_css3.svg";
import { ReactComponent as Database } from "../assets/server_sharp.svg";
import styles from "./Skills.module.css";

const Skills = () => {
	const skills = [
		{ icon: <Python className={styles.icon} />, title: "Python" },
		{ icon: <Javascript className={styles.icon} />, title: "JavaScript" },
		{ icon: <React2 className={styles.icon} />, title: "React" },
		{ icon: <Github className={styles.icon} />, title: "GitHub" },
		{ icon: <Node className={styles.icon} />, title: "Node.js" },
		{ icon: <Npm className={styles.icon} />, title: "NPM" },
		{ icon: <HTML className={styles.icon} />, title: "HTML5" },
		{ icon: <CSS className={styles.icon} />, title: "CSS3" },
		{ icon: <Database className={styles.icon} />, title: "Database" },
	];

	return (
		<div className={styles.container}>
			<h1>My Skills</h1>
			<div className={styles.grid}>
				{skills.map((skill, index) => (
					<div
						key={index}
						className={styles.card}>
						{skill.icon}
						<h5 className={styles.cardTitle}>{skill.title}</h5>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

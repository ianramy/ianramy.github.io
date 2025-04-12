// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/icons/home_outline.svg?react";
import About from "../assets/icons/id_card_outline.svg?react";
import Skills from "../assets/icons/star_outline.svg?react";
import Projects from "../assets/icons/layers_outline.svg?react";
import Contact from "../assets/icons/send_outline.svg?react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<navbar className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={`${styles.list} ${styles.active}`}>
						<Link
							to="/"
							className={styles.navLink}>
							<Home className={styles.icon} />
							<span className={styles.text}>Home</span>
						</Link>
					</li>
					<li className={styles.list}>
						<Link
							to="/About"
							className={styles.navLink}>
							<About className={styles.icon} />
							<span className={styles.text}>About</span>
						</Link>
					</li>
					<li className={styles.list}>
						<Link
							to="/Skills"
							className={styles.navLink}>
							<Skills className={styles.icon} />
							<span className={styles.text}>Skills</span>
						</Link>
					</li>
					<li className={styles.list}>
						<Link
							to="/Projects"
							className={styles.navLink}>
							<Projects className={styles.icon} />
							<span className={styles.text}>Projects</span>
						</Link>
					</li>
					<li className={styles.list}>
						<Link
							to="/Contact"
							className={styles.navLink}>
							<Contact className={styles.icon} />
							<span className={styles.text}>Contact</span>
						</Link>
					</li>
				</ul>
			</nav>
		</navbar>
	);
};

export default Navbar;

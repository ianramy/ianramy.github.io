// src/components/header.js
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/home_outline.svg";
import { ReactComponent as About } from "../assets/id_card_outline.svg";
import { ReactComponent as Skills } from "../assets/star_outline.svg";
import { ReactComponent as Projects } from "../assets/layers_outline.svg";
import { ReactComponent as Contact } from "../assets/send_outline.svg";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
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
		</header>
	);
};

export default Header;

// src/components/sidebar.js
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as AboutIcon } from "../assets/id_card_outline.svg";
import { ReactComponent as ProjectsIcon } from "../assets/layers_outline.svg";
import { ReactComponent as ContactIcon } from "../assets/send_outline.svg";
import { ReactComponent as MenuIcon } from "../assets/menu_outline.svg";
import { ReactComponent as CloseIcon } from "../assets/close_outline.svg";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const links = [
		{
			href: "About",
			label: "About",
			icon: <AboutIcon className={styles.icon} />,
		},
		{
			href: "Projects",
			label: "Projects",
			icon: <ProjectsIcon className={styles.icon} />,
		},
		{
			href: "Contact",
			label: "Contacts",
			icon: <ContactIcon className={styles.icon} />,
		},
	];

	return (
		<div
			className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)} 
		>
			<button
				className={styles.toggleButton}
				onClick={toggleSidebar}>
				{isOpen ? (
					<CloseIcon className={styles.menuIcon} />
				) : (
					<MenuIcon className={styles.menuIcon} />
				)}
			</button>
			<ul className={styles.list}>
				{links.map((link, index) => (
					<li
						key={index}
						className={styles.item}>
						<a
							href={link.href}
							className={styles.link}>
							{link.icon}
							<span className={styles.text}>{link.label}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

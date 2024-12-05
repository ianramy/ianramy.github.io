// src/pages/Contact.js
import React from "react";
import { ReactComponent as Whatsapp } from "../assets/logo_whatsapp.svg";
import { ReactComponent as Twitter } from "../assets/logo_twitter.svg";
import { ReactComponent as Github } from "../assets/logo_github.svg";
import { ReactComponent as Instagram } from "../assets/logo_instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/logo_linkedin.svg";
import styles from "./Contact.module.css"; // Importing CSS module

const Contact = () => {
	const socials = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/_ian.ramy_/",
			icon: <Instagram className={styles.icon} />,
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/254755600381",
			icon: <Whatsapp className={styles.icon} />,
		},
		{
			name: "GitHub",
			href: "https://github.com/ianramy",
			icon: <Github className={styles.icon} />,
		},
		{
			name: "Twitter",
			href: "https://twitter.com/IyaanRamy",
			icon: <Twitter className={styles.icon} />,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/ian-mwagore-91b1ab32b/",
			icon: <LinkedIn className={styles.icon} />,
		},
	];

	return (
		<div className={styles.container}>
			<h1>Contact Me</h1>
			<p className={styles.description}>
				Feel free to reach out to me through my socials:
			</p>
			<div className={styles.socials}>
				{socials.map((social, index) => (
					<a
						key={index}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit my ${social.name}`}
						className={styles.socialLink}>
						{social.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default Contact;

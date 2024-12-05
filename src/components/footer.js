// src/components/footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>
				Ian Ramy &copy; {new Date().getFullYear()}. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;

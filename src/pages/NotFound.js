// src/pages/NotFound.js
import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.alert}
				role="alert">
				<h1 className={styles.heading}>404</h1>
				<p className={styles.lead}>Page Not Found</p>
				<p className={styles.text}>
					The page you are looking for does not exist.
				</p>
				<a
					href="/"
					className={styles.button}>
					Go Back to Home
				</a>
			</div>
		</div>
	);
};

export default NotFound;

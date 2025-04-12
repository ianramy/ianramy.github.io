// src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const HeroSection = ({ title, subtitle }) => {
	return (
		<div className={styles.hero}>
			<motion.h1
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.8 }}
			>
				{title}
			</motion.h1>

			<motion.p
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.8 }}
			>
				{subtitle}
			</motion.p>
		</div>
	);
};

export default HeroSection;

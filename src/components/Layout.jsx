// src/components/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../App.module.css";

const Layout = () => {
	return (
		<div className={styles.app}>
			<Navbar />
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;

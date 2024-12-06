// src/App.js
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
// import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import styles from "./App.module.css"; 

const App = () => {
	return (
		<Router>
			<div className={styles.app}>
				<Header />
				<div className={styles.body}>
					{/* <Sidebar /> */}
					<main className={styles.content}>
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/About"
								element={<About />}
							/>
							<Route
								path="/Projects"
								element={<Projects />}
							/>
							<Route
								path="/Contact"
								element={<Contact />}
							/>
							<Route
								path="/Skills"
								element={<Skills />}
							/>
							<Route
								path="*"
								element={<NotFound />}
							/>
						</Routes>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;

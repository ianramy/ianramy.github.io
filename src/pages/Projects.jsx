// src/pages/Projects.jsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import styles from "./Projects.module.css";
import PoemImg from "../assets/images/poem.jpg";
import SchoolImg from "../assets/images/school.jpg";
import LanguagesImg from "../assets/images/14langs.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Coding in 14 Languages",
      description: `Built a collection of apps in 14 programming languages to compare syntax, API usage, and tooling. Covers Python, JS, Go, Rust, C#, Java, and more. Each app performs a similar task such as HTTP requests or CLI input/output.`,
      image: LanguagesImg,
      link: "https://github.com/ianramy/code",
    },
    {
      title: "Poem Generator Web App",
      description: `A responsive React + Flask app that generates poetry from prompts using natural language logic. Includes dark mode, copy/share tools, and animated interactions for a clean user experience.`,
      image: PoemImg,
      link: "https://ianramy.github.io/Poem",
    },
    {
      title: "Moringa School Helpdesk",
      description: `Internal tool for Moringa to handle technical support requests. Built with Flask, it includes login, ticket tracking, and response logging. Deployed on Render with email alerts and admin dashboards.`,
      image: SchoolImg,
      link: "https://moringa-helpdesk.onrender.com",
    },
  ];

  return (
    <div className={styles.container}>
      <HeroSection
        title="Projects"
        subtitle="Each project below demonstrates full-stack capability and problem solving across real-world use cases."
      />

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          const isImageLeft = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              className={`${styles.projectRow} ${isImageLeft ? styles.reverse : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.projectImageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <small className={styles.imageCredit}>Photo by Ian Ramy</small>
              </div>
              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {project.link.includes("github.com") ? "View on GitHub" : "View Live Project"}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

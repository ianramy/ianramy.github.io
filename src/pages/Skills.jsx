// src/pages/Skills.jsx

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { calculateExperience } from "../utils/calcExperience";
import styles from "./Skills.module.css";
import HeroSection from "../components/HeroSection";
import {
  Git, Sqlite, PostgreSQL, MySQL, Vscode, Pycharm, Figma,
  Python, Javascript, React2, Vite, Github, Node, Npm, HTML, CSS,
  TypeScript, Bootstrap, C, Cpp, CSharp, Flask, Redux, SqlAlchemy
} from "../assets";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    items: [
      {
        title: "Python",
        icon: <Python className={styles.icon} />,
        description: `My go-to for scripting and backend logic. Python powers most of my APIs and data tasks.`,
        years: calculateExperience("2024-09-01"),
      },
      {
        title: "JavaScript",
        icon: <Javascript className={styles.icon} />,
        description: `Fluent in JS for full-stack, from DOM manipulation to backend API calls with Node.js.`,
        years: calculateExperience("2024-07-01"),
      },
      {
        title: "TypeScript",
        icon: <TypeScript className={styles.icon} />,
        description: `Actively learning TS. Already applying it in my React apps to tighten data flow and types.`,
        years: calculateExperience("2024-11-25"),
      },
      {
        title: "C",
        icon: <C className={styles.icon} />,
        description: `Diving into C for memory management and system-level problem solving — a real brain workout.`,
        years: calculateExperience("2024-11-25"),
      },
      {
        title: "C++",
        icon: <Cpp className={styles.icon} />,
        description: `C++ helps me understand object-oriented programming and is great for performance-critical applications.`,
        years: calculateExperience("2024-11-25"),
      },
      {
        title: "C#",
        icon: <CSharp className={styles.icon} />,
        description: `I’m grasping C# basics and appreciating its clean syntax and enterprise tooling.`,
        years: calculateExperience("2024-11-25"),
      },
      {
        title: "React",
        icon: <React2 className={styles.icon} />,
        description: `My main frontend framework. I love it for its component architecture and ecosystem.`,
        years: calculateExperience("2024-07-15"),
      },
      {
        title: "HTML5",
        icon: <HTML className={styles.icon} />,
        description: `Technically not a language, but we all treat it like royalty. The semantic skeleton of my frontends.`,
        years: calculateExperience("2024-06-01"),
      },
      {
        title: "CSS3",
        icon: <CSS className={styles.icon} />,
        description: `CSS3 with modules keeps my UI clean. I avoid global pollution like a proper engineer.`,
        years: calculateExperience("2024-06-01"),
      },
    ],
  },
  {
    category: "Backend Frameworks",
    items: [
      {
        title: "Node.js",
        icon: <Node className={styles.icon} />,
        description: `Event-driven, lightweight, and powerful. I use Node for webhooks and microservices.`,
        years: calculateExperience("2024-07-15"),
      },
      {
        title: "Flask",
        icon: <Flask className={styles.icon} />,
        description: `Flask + Flask-Restx is my typical stack for internal APIs and MVPs.`,
        years: calculateExperience("2024-09-20"),
      },
      {
        title: "SQLAlchemy",
        icon: <SqlAlchemy className={styles.icon} />,
        description: `With SQLAlchemy, I write Python and still control my SQL — best of both worlds for data.`,
        years: calculateExperience("2024-09-15"),
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        title: "PostgreSQL",
        icon: <PostgreSQL className={styles.icon} />,
        description: `With PostgreSQL, I handle data the way it was meant to be: structured, strict, and powerful.`,
        years: calculateExperience("2024-10-10"),
      },
      {
        title: "MySQL",
        icon: <MySQL className={styles.icon} />,
        description: `Functional and familiar. I can work with MySQL but prefer Postgres for stricter relational work.`,
        years: calculateExperience("2024-10-01"),
      },
      {
        title: "SQLite",
        icon: <Sqlite className={styles.icon} />,
        description: `SQLite is where I start before bringing in PostgreSQL — clean, no server required.`,
        years: calculateExperience("2024-09-25"),
      },
    ],
  },
  {
    category: "Build & State Tools",
    items: [
      {
        title: "Vite",
        icon: <Vite className={styles.icon} />,
        description: `My build tool of choice. Instant HMR, clean config — it makes dev feel fun again.`,
        years: calculateExperience("2024-08-01"),
      },
      {
        title: "Redux",
        icon: <Redux className={styles.icon} />,
        description: ` When app state becomes a beast, this keeps it predictable and under control.`,
        years: calculateExperience("2024-07-25"),
      },
      {
        title: "NPM",
        icon: <Npm className={styles.icon} />,
        description: `NPM is my script runner, dependency wrangler, and accidental 10GB node_modules folder generator.`,
        years: calculateExperience("2024-07-10"),
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        title: "Git",
        icon: <Git className={styles.icon} />,
        description: `I use Git for every commit, rebase, and merge. It’s part of my muscle memory now.`,
        years: calculateExperience("2024-06-08"),
      },
      {
        title: "GitHub",
        icon: <Github className={styles.icon} />,
        description: `Central to all my project workflows. From versioning to PRs and GitHub Actions.`,
        years: calculateExperience("2024-06-07"),
      },
    ],
  },
  {
    category: "Code Editors & UI Tools",
    items: [
      {
        title: "VS Code",
        icon: <Vscode className={styles.icon} />,
        description: `It’s where I live. My full-stack pipeline is fine-tuned through VS Code setups.`,
        years: calculateExperience("2024-06-01"),
      },
      {
        title: "PyCharm",
        icon: <Pycharm className={styles.icon} />,
        description: `Still learning PyCharm — but I can already feel the power of a dedicated Python IDE.`,
        years: calculateExperience("2024-09-10"),
      },
      {
        title: "Figma",
        icon: <Figma className={styles.icon} />,
        description: `Starting to design in Figma — I use it to bridge the gap between UX and implementation.`,
        years: calculateExperience("2024-11-01"),
      },
      {
        title: "Bootstrap",
        icon: <Bootstrap className={styles.icon} />,
        description: `Not every project needs custom CSS. Bootstrap covers the essentials with minimal setup.`,
        years: calculateExperience("2024-07-10"),
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <HeroSection
        title="My Skills"
        subtitle="Grouped by usage — these are the technologies I work with in modern full-stack development."
      />

      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3 className={styles.groupTitle}>{group.category}</h3>
          <div className={styles.timeline}>
            {group.items.map((skill, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: false, margin: "-100px" });

              return (
                <motion.div
                  ref={ref}
                  key={skill.title}
                  className={styles.entry}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <motion.div
                    className={styles.iconContainer}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <div className={styles.textContainer}>
                    <h4 className={styles.skillTitle}>
                      {skill.title} <span className={styles.years}>({skill.years})</span>
                    </h4>
                    <p className={styles.skillDesc}>{skill.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

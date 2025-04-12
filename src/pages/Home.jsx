// src/pages/Home.jsx

import React, { useState, useEffect , useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const prompts = [
  "Who dares to enter the dev vault? Identify yourself.",
  "Hey wanderer, drop your codename.",
  "You’ve stumbled into the Matrix. What’s your handle?",
  "Initializing user session... Who are you?",
  "Knock knock... Who’s there? Type your name to proceed.",
  "Enter your alias to unlock the console.",
  "Stranger detected. Credentials?",
  "System paused… awaiting operator input: Name",
  "You’ve triggered the welcome script. What’s your alias?",
  "Don't be shy. Drop your name to start."
];

const nameResponses = [
  " System response: Access granted, welcome aboard.",
  " System response: Console cleared. Let’s rewrite history.",
  " System response: You’re officially root. Don’t mess this up.",
  " System response: The compiler needs your name to start the demo.",
  " System response: Welcome... I've been refactoring just for you.",
  " System response: All systems go. You’re cleared for deployment.",
  " System response: Name accepted. May your commits be clean.",
  " System response: Build succeeded. You're amazing.",
  " System response: Welcome. Hope you brought snacks."
];

const returnResponses = [
  "Ah, I see you're back.",
  "East or west, home is the best.",
  "You planned on leaving without saying goodbye?",
  "Returning so soon? I like your style.",
  "Welcome back, the console missed you."
];

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [fullResponse, setFullResponse] = useState("");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);
  const inView = useInView(terminalRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const savedName = sessionStorage.getItem("username");
    if (savedName) {
      setName(savedName);
      setSubmitted(true);
      const msg = returnResponses[Math.floor(Math.random() * returnResponses.length)];
      setTypedText(msg);
    } else {
      const promptText = prompts[Math.floor(Math.random() * prompts.length)];
      setPrompt(promptText);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      sessionStorage.setItem("username", name.trim());
      setSubmitted(true);
      setIsTyping(true);
      const msg = nameResponses[Math.floor(Math.random() * nameResponses.length)];
      setFullResponse(msg);
      setTypedText("");
    }
  };

  useEffect(() => {
    if (!isTyping || !fullResponse) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullResponse.charAt(i));
      i++;
      if (i >= fullResponse.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [isTyping, fullResponse]);

  const resetIdentity = () => {
    sessionStorage.removeItem("username");
    setName("");
    setSubmitted(false);
    setTypedText("");
    setFullResponse("");
    const promptText = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(promptText);
  };

  const navItems = [
    { cmd: "Run 'about'", path: "/about" },
    { cmd: "Run 'skills'", path: "/skills" },
    { cmd: "Run 'projects'", path: "/projects" },
    { cmd: "Run 'contact'", path: "/contact" },
    { cmd: "Run 'reset identity'", path: "#", onClick: resetIdentity }
  ];

  return (
    <div className={styles.pageContainer}>
      <HeroSection 
      title="Hi, I'm Ian — Full-Stack Software Engineer"
        subtitle="Passionate about crafting scalable web applications and delivering impactful user experiences."
      />

    <motion.div
    ref={terminalRef}
    className={styles.terminalWrapper}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <div className={styles.terminalHeader}>
        <span className={styles.dot} style={{ background: "#ff5f56" }} />
        <span className={styles.dot} style={{ background: "#ffbd2e" }} />
        <span className={styles.dot} style={{ background: "#27c93f" }} />
    </div>

    <div className={styles.terminal}>
        <p className={styles.line}>System loading...</p>

        {!submitted ? (
        <>
            <p className={styles.response}>{prompt}</p>
            <form onSubmit={handleSubmit} className={styles.inputRow}>
            <span className={styles.path}>ianramy@website~%</span>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                autoFocus
            />
            </form>
        </>
        ) : (
        <>
            <p className={styles.response}>
            ianramy@website ~ % Welcome to Ian Ramy's Portfolio, {name}!
            </p>
            <p className={styles.response}>
            {isTyping ? (
                <span>{typedText}<span className={styles.cursor}>|</span></span>
            ) : (
                <span>{typedText}</span>
            )}
            </p>
            <div className={styles.commands}>
            {navItems.map((item) => (
                <div
                key={item.cmd}
                className={styles.command}
                onClick={() =>
                    item.onClick ? item.onClick() : navigate(item.path)
                }
                >
                ➤ {item.cmd}
                </div>
            ))}
            </div>
        </>
        )}
    </div>
    </motion.div>
    </div>
  );
};

export default Home;

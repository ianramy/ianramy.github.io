// src/pages/NotFound.jsx

import React from "react";
import styles from "./NotFound.module.css";
import HeroSection from "../components/HeroSection";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <HeroSection 
        title="404 — Page Not Found"
        subtitle="Looks like you've wandered off the route map. Let's get you back." 
      />
      <div className={styles.content}>
        <p className={styles.text}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a href="/" className={styles.button}>
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

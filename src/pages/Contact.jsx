// src/pages/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Twitter from "../assets/icons/logo_twitter.svg?react";
import Github from "../assets/icons/logo_github.svg?react";
import Instagram from "../assets/icons/logo_instagram.svg?react";
import LinkedIn from "../assets/icons/logo_linkedin.svg?react";
import styles from "./Contact.module.css";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ian_ramy/",
    icon: <Instagram className={`${styles.icon} ${styles.instagram}`} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ianramy",
    icon: <Github className={`${styles.icon} ${styles.github}`} />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/IyaanRamy",
    icon: <Twitter className={`${styles.icon} ${styles.twitter}`} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ian-ramy-91b1ab32b/",
    icon: <LinkedIn className={`${styles.icon} ${styles.linkedin}`} />,
  },
];

const Contact = () => {
  return (
    <div className={styles.container}>
      <HeroSection
        title="Contact Me"
        subtitle="Let's build something impactful. Reach out via any platform below."
      />

      <div className={styles.socialsGrid}>
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.name}`}
            className={styles.socialItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
          >
            {social.icon}
            <span className={styles.label}>{social.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

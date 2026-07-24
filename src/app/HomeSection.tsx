"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import TiltCard from "./TiltCard";

const highlights = [
  { label: "Years Building", value: "4+" },
  { label: "Apps Shipped", value: "25+" },
  { label: "Core Focus", value: "iOS + RN" },
];

const buildStack = ["Swift", "SwiftUI", "React Native", "Firebase", "StoreKit 2"];

const marqueeItems = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "React Native",
  "Flutter",
  "Firebase",
  "HealthKit",
  "StoreKit 2",
  "TypeScript",
  "Redux",
  "WatchOS",
  "Push Notifications",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeSection() {
  return (
    <section id="home" className="home-section">
      <div className="container home-grid">
        <motion.div
          className="home-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
          }}
        >
          <motion.p
            className="hero-badge"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="status-dot" aria-hidden />
            Available for new projects
          </motion.p>

          <motion.p
            className="hero-eyebrow"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <IoSparklesOutline aria-hidden />
            Ishpreet Singh — Mobile Product Engineer
          </motion.p>

          <motion.h1
            className="hero-title"
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
          >
            Crafting polished <span className="hero-accent">mobile apps</span> that feel fast,
            clear, and premium.
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
          >
            I&apos;m Ishpreet Singh, an iOS and React Native developer focused on turning product ideas
            into delightful, scalable apps. From architecture to UI polish, I ship work that users
            notice.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Book a Call
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            aria-label="Social links"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease }}
          >
            <a
              href="https://www.linkedin.com/in/ishpreet-singh-598726219/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/techHunting-Pegasus"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub size={18} />
            </a>
            <a href="mailto:ishpreetsingh8386@gmail.com" aria-label="Email" className="social-link">
              <FaEnvelope size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
        >
          <div className="hero-glow" aria-hidden />

          <TiltCard className="phone" max={12}>
            <div className="phone-frame">
              <span className="phone-island" aria-hidden />
              <div className="phone-screen">
                <div className="phone-statusbar" aria-hidden>
                  <span>9:41</span>
                  <span className="phone-statusbar-icons">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>

                <div className="phone-app">
                  <p className="phone-app-title">Build Stack</p>

                  <div className="phone-chips">
                    {buildStack.map((item) => (
                      <span key={item} className="phone-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="phone-stats">
                    {highlights.map((item) => (
                      <article key={item.label} className="phone-stat">
                        <p className="phone-stat-value">{item.value}</p>
                        <p className="phone-stat-label">{item.label}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          <span className="hero-float-pill hero-float-pill-one">Performance-First</span>
          <span className="hero-float-pill hero-float-pill-two">UI Craftsmanship</span>
        </motion.div>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

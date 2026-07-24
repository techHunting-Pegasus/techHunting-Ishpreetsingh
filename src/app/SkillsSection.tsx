"use client";

import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaAppleAlt,
  FaBell,
  FaHeartbeat,
  FaJs,
  FaReact,
  FaRegClock,
  FaSwift,
} from "react-icons/fa";
import { SiFirebase, SiFlutter, SiRedux, SiStripe, SiTypescript } from "react-icons/si";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Skill = {
  name: string;
  icon: ReactElement;
  level: number;
  description: string;
  projects: string[];
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      {
        name: "Swift",
        icon: <FaSwift color="#fa7343" />,
        level: 95,
        description: "Primary language for high-quality iOS apps and scalable architecture.",
        projects: ["LAW & CRIME", "CNBC Arabia"],
      },
      {
        name: "JavaScript",
        icon: <FaJs color="#f7df1e" />,
        level: 92,
        description: "Production-ready JavaScript for mobile logic, SDK integrations, and tooling.",
        projects: ["TWR", "By the Way"],
      },
      {
        name: "TypeScript",
        icon: <SiTypescript color="#3178c6" />,
        level: 88,
        description: "Type-safe development for complex React Native codebases and APIs.",
        projects: ["Admin Dashboard", "Rallii"],
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "UIKit",
        icon: <FaApple color="#212121" />,
        level: 90,
        description: "Mature iOS interfaces with robust navigation patterns and custom interactions.",
        projects: ["LAW & CRIME", "ALTBalaji"],
      },
      {
        name: "SwiftUI",
        icon: <FaApple color="#212121" />,
        level: 85,
        description: "Faster UI iteration with clean declarative components on Apple platforms.",
        projects: ["goPiviot", "MiloCare"],
      },
      {
        name: "React Native",
        icon: <FaReact color="#00b5d8" />,
        level: 93,
        description: "Cross-platform app delivery with near-native feel and efficient release cycles.",
        projects: ["TWR", "CFL"],
      },
      {
        name: "Flutter",
        icon: <SiFlutter color="#02569b" />,
        level: 80,
        description: "Fast feature delivery for event and health products using shared UI components.",
        projects: ["ICEF", "MiloCare"],
      },
      {
        name: "Redux",
        icon: <SiRedux color="#764abc" />,
        level: 80,
        description: "Predictable state management for large app surfaces and complex data flows.",
        projects: ["TWR", "By the Way"],
      },
    ],
  },
  {
    name: "Platforms",
    skills: [
      {
        name: "WatchOS",
        icon: <FaAppleAlt color="#212121" />,
        level: 75,
        description: "Companion experiences for Apple Watch with health and activity context.",
        projects: ["goPiviot"],
      },
      {
        name: "HealthKit",
        icon: <FaHeartbeat color="#16a34a" />,
        level: 78,
        description: "Secure health data integrations powering insights and personalized routines.",
        projects: ["goPiviot", "MiloCare"],
      },
      {
        name: "Firebase",
        icon: <SiFirebase color="#f59e0b" />,
        level: 85,
        description: "Realtime data, auth, and messaging infrastructure for mobile products.",
        projects: ["TWR", "ICEF"],
      },
      {
        name: "Apple Ecosystem",
        icon: <FaApple color="#212121" />,
        level: 90,
        description: "iOS-first delivery with ecosystem-level thinking across Apple devices.",
        projects: ["LAW & CRIME", "CNBC Arabia"],
      },
      {
        name: "Android",
        icon: <FaAndroid color="#3ddc84" />,
        level: 70,
        description: "Cross-platform support for broad product reach and stable Android releases.",
        projects: ["ICEF", "By the Way"],
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Push Notifications",
        icon: <FaBell color="#0f766e" />,
        level: 87,
        description: "Timely and meaningful push workflows that improve retention.",
        projects: ["CNBC Arabia", "CFL"],
      },
      {
        name: "Subscriptions",
        icon: <SiStripe color="#635bff" />,
        level: 82,
        description: "Reliable in-app purchases and subscription lifecycle handling.",
        projects: ["ALTBalaji", "iDrop"],
      },
      {
        name: "Realtime Systems",
        icon: <FaRegClock color="#0f766e" />,
        level: 80,
        description: "Live sync experiences for chat, updates, and event-driven data.",
        projects: ["By the Way", "Rallii"],
      },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Depth Across Native And Cross-Platform</h2>
          <p className="section-copy">
            My toolkit balances speed and quality: strong iOS foundations, React Native delivery, and battle-tested
            integrations for subscriptions, notifications, and realtime features.
          </p>

          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                className={`skill-tab${activeTab === index ? " active" : ""}`}
                onClick={() => setActiveTab(index)}
                role="tab"
                aria-selected={activeTab === index}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={activeTab}
          className="skill-grid"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {skillCategories[activeTab].skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <TiltCard className="skill-card" max={7}>
                <div className="skill-card-top">
                  <span className="skill-icon" aria-hidden>
                    {skill.icon}
                  </span>
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>

                <div className="skill-meter" aria-hidden>
                  <span className="skill-meter-fill" style={{ width: `${skill.level}%` }} />
                </div>

                <p>{skill.description}</p>

                <div className="skill-pill-list">
                  {skill.projects.map((project) => (
                    <span key={project}>{project}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

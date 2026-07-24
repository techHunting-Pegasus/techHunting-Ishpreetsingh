"use client";

import { useMemo, useState, type ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaApple,
  FaArrowRight,
  FaBell,
  FaChartLine,
  FaCheck,
  FaComments,
  FaExternalLinkAlt,
  FaGithub,
  FaHeart,
  FaNewspaper,
  FaReact,
  FaRegCalendarAlt,
  FaRegNewspaper,
  FaServer,
  FaShoppingBag,
  FaSwift,
  FaTimes,
  FaVideo,
} from "react-icons/fa";
import { SiFirebase, SiFlutter } from "react-icons/si";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Project = {
  title: string;
  featured?: boolean;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "LAW & CRIME",
    description:
      "OTT streaming app for live trials, legal news, and crime content with a CMS-driven UI.",
    longDescription: `LAW & CRIME is a USA-based OTT streaming platform focused on live courtroom coverage, legal analysis, and crime-related content.

**Key Features:**
- CMS-based dynamic UI rendering
- Video streaming with optimized performance
- Deep linking for seamless navigation
- Push notification integration for real-time updates
- Scalable API architecture

**Tech Stack:** iOS (Swift), UIKit, REST APIs, Deep Linking, Push Notifications

**My Role:** Developed and integrated CMS-driven UI, handled API integration, implemented deep linking, and managed notification workflows for smooth content delivery.`,
    tech: ["iOS", "Swift", "Video", "REST", "Push"],
    github: "",
    live: "",
  },
  {
    title: "CNBC Arabia",
    description: "Full-featured news app with real-time updates, notifications, and deep linking.",
    longDescription: `CNBC Arabia is a full-featured news application delivering business, finance, and global updates.

**Key Features:**
- Real-time news feed with API integration
- Deep linking for content navigation
- Push notifications for breaking news
- Clean and responsive UI/UX
- Optimized data handling for fast loading

**Tech Stack:** iOS (Swift), UIKit, REST APIs, Push Notifications, Deep Linking

**My Role:** Built the application from scratch, including UI implementation, API integration, and notification architecture.`,
    tech: ["iOS", "Swift", "News", "Push", "REST"],
    github: "",
    live: "",
  },
  {
    title: "ALTBalaji",
    description: "OTT subscription flows with StoreKit 2 for secure in-app purchases.",
    longDescription: `ALTBalaji is a popular OTT streaming platform offering web series, movies, and exclusive content.

**Key Features:**
- Subscription handling using StoreKit 2
- Purchase validation and receipt handling
- Seamless plan upgrades and lifecycle sync
- Backend integration for subscription status

**Tech Stack:** iOS (Swift), StoreKit 2, In-App Purchases, REST APIs

**My Role:** Implemented subscription modules, managed purchase validation, and ensured reliable subscription lifecycle behavior.`,
    tech: ["iOS", "Swift", "StoreKit", "REST"],
    github: "",
    live: "",
  },
  {
    title: "iDrop",
    featured: true,
    description: "iOS shopping app for seamless online purchases and fast checkout.",
    longDescription: `iDrop is a modern iOS shopping app designed for a frictionless purchasing experience.

**Key Features:**
- Real-time product updates and inventory
- Secure Apple Pay checkout
- Personalized recommendations
- Order tracking and push notifications

**Tech Stack:** Swift, UIKit, Firebase, Apple Pay

**My Role:** Led iOS development, designed the UI, and implemented payment workflows.`,
    tech: ["iOS", "Swift", "Firebase", "Shopping"],
    github: "",
    live: "",
  },
  {
    title: "goPiviot",
    description: "iOS + Apple Watch fitness app with health insights and analytics.",
    longDescription: `goPiviot helps users track workouts, monitor health metrics, and sync seamlessly with Apple Watch.

**Key Features:**
- Apple Watch sync
- HealthKit integration
- Workout analytics and streak tracking
- Goal customization and progress insights

**Tech Stack:** Swift, SwiftUI, HealthKit, WatchOS

**My Role:** Architected WatchOS sync and built the analytics dashboard.`,
    tech: ["iOS", "Swift", "Health", "WatchOS"],
    github: "",
    live: "",
  },
  {
    title: "TWR",
    description: "Bible and news app for daily inspiration with curated updates.",
    longDescription: `TWR combines scripture reading with curated news in a single, easy-to-use app.

**Key Features:**
- Bible reading and search
- Daily devotionals
- News feed integration
- Bookmarking and sharing

**Tech Stack:** React Native, Firebase, News API, iOS, Swift

**My Role:** Built the news feed and devotional modules, and led cross-platform deployment.`,
    tech: ["React Native", "News", "Firebase", "iOS", "Swift"],
    github: "",
    live: "",
  },
  {
    title: "By the Way",
    description: "React Native dating app focused on authentic conversations.",
    longDescription: `By the Way is a dating app focused on genuine matches and real conversations.

**Key Features:**
- Smart matching algorithm
- Secure in-app chat
- Profile verification
- Privacy-first design

**Tech Stack:** React Native, Firebase, Node.js

**My Role:** Developed the chat system and implemented privacy features.`,
    tech: ["React Native", "Dating", "Chat"],
    github: "",
    live: "",
  },
  {
    title: "Rallii",
    description: "Event organizer app for planning, invites, reminders, and RSVPs.",
    longDescription: `Rallii helps users organize and manage events with a streamlined mobile workflow.

**Key Features:**
- Event creation and invitations
- RSVP and reminder management
- Group chat
- Calendar integration

**Tech Stack:** React Native, Firebase, Google Calendar API

**My Role:** Led React Native development and built calendar sync.`,
    tech: ["React Native", "Event", "Calendar"],
    github: "",
    live: "",
  },
  {
    title: "CFL",
    description: "News and publishing app with editorial workflows and notifications.",
    longDescription: `CFL is a platform for news, articles, and publishing with a clean reading experience.

**Key Features:**
- Curated news and articles
- Push notifications
- User comments
- Editorial dashboard

**Tech Stack:** React Native, Firebase, Node.js, iOS, Swift

**My Role:** Built the editorial dashboard and notification workflow.`,
    tech: ["React Native", "News", "Publishing", "iOS", "Swift"],
    github: "",
    live: "",
  },
  {
    title: "ICEF",
    description: "Flutter event app for conferences with live updates and agendas.",
    longDescription: `ICEF provides event schedules, speaker bios, and real-time conference updates.

**Key Features:**
- Event schedule and custom agenda
- Speaker profiles
- Live updates
- Configurable notifications

**Tech Stack:** Flutter, Firebase

**My Role:** Developed the agenda builder and live update modules.`,
    tech: ["Flutter", "Event", "Conference"],
    github: "",
    live: "",
  },
  {
    title: "MiloCare",
    description: "Flutter health app for personal wellness and care coordination.",
    longDescription: `MiloCare helps users track goals, connect with providers, and monitor health progress.

**Key Features:**
- Health goal tracking
- Secure provider messaging
- Appointment scheduling
- Analytics dashboard

**Tech Stack:** Flutter, Firebase, HealthKit

**My Role:** Built the analytics dashboard and provider messaging system.`,
    tech: ["Flutter", "Health", "Analytics"],
    github: "",
    live: "",
  },
];

const gradients = [
  "linear-gradient(135deg, #0f9d8a 0%, #0f4c81 100%)",
  "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
  "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
  "linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
  "linear-gradient(135deg, #22c55e 0%, #0f766e 100%)",
];

const techIcons: Record<string, ReactElement> = {
  iOS: <FaApple color="#e5edf7" title="iOS" />,
  Swift: <FaSwift color="#fa7343" title="Swift" />,
  Firebase: <SiFirebase color="#ffca28" title="Firebase" />,
  Shopping: <FaShoppingBag color="#2dd4bf" title="Shopping" />,
  Health: <FaHeart color="#22c55e" title="Health" />,
  WatchOS: <FaApple color="#e5edf7" title="WatchOS" />,
  "React Native": <FaReact color="#22d3ee" title="React Native" />,
  News: <FaNewspaper color="#60a5fa" title="News" />,
  Flutter: <SiFlutter color="#54c5f8" title="Flutter" />,
  Event: <FaRegCalendarAlt color="#a78bfa" title="Event" />,
  Calendar: <FaRegCalendarAlt color="#a78bfa" title="Calendar" />,
  Publishing: <FaRegNewspaper color="#60a5fa" title="Publishing" />,
  Conference: <FaRegCalendarAlt color="#a78bfa" title="Conference" />,
  Analytics: <FaChartLine color="#2dd4bf" title="Analytics" />,
  Dating: <FaHeart color="#fb7185" title="Dating" />,
  Chat: <FaComments color="#c084fc" title="Chat" />,
  Video: <FaVideo color="#f87171" title="Video" />,
  REST: <FaServer color="#94a3b8" title="REST APIs" />,
  Push: <FaBell color="#fbbf24" title="Push notifications" />,
  StoreKit: <FaShoppingBag color="#a78bfa" title="StoreKit" />,
};

const allTech = Array.from(new Set(projects.flatMap((project) => project.tech)));

const categoryRules: { key: string; label: string }[] = [
  { key: "Video", label: "Streaming" },
  { key: "StoreKit", label: "Streaming" },
  { key: "Shopping", label: "Commerce" },
  { key: "Health", label: "Health & Fitness" },
  { key: "Dating", label: "Social" },
  { key: "Chat", label: "Social" },
  { key: "Event", label: "Events" },
  { key: "Conference", label: "Events" },
  { key: "News", label: "Media" },
  { key: "Publishing", label: "Media" },
];

function categoryOf(project: Project) {
  const match = categoryRules.find((rule) => project.tech.includes(rule.key));
  return match ? match.label : "Mobile App";
}

/** Primary platform badge, chosen from the tech list. */
function platformOf(project: Project) {
  if (project.tech.includes("Flutter")) return "Flutter";
  if (project.tech.includes("React Native")) return "React Native";
  return "iOS";
}

type ProjectDetail = {
  overview: string;
  features: string[];
  techStack: string;
  role: string;
};

/** Parses the markdown-ish longDescription into structured detail sections. */
function parseProject(longDescription: string): ProjectDetail {
  const clean = longDescription.replace(/\r/g, "");

  const overview = clean.split("**")[0].trim();

  const featuresBlock = clean.match(/\*\*Key Features:\*\*([\s\S]*?)(?:\n\n|\*\*)/);
  const features = featuresBlock
    ? featuresBlock[1]
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("- "))
        .map((line) => line.slice(2))
    : [];

  const techMatch = clean.match(/\*\*Tech Stack:\*\*\s*([^\n]*)/);
  const roleMatch = clean.match(/\*\*My Role:\*\*\s*([\s\S]*?)$/);

  return {
    overview,
    features,
    techStack: techMatch ? techMatch[1].trim() : "",
    role: roleMatch ? roleMatch[1].trim() : "",
  };
}

export default function ProjectsSection() {
  const [openProjectTitle, setOpenProjectTitle] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.tech.includes(filter))),
    [filter],
  );

  const openIndex = projects.findIndex((project) => project.title === openProjectTitle);
  const openProject = openIndex >= 0 ? projects[openIndex] : null;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Real Products Used By Real Users</h2>
          <p className="section-copy">
            A mix of OTT, commerce, media, health, and event apps delivered across native iOS and cross-platform
            stacks.
          </p>

          <div className="project-filter-row" role="toolbar" aria-label="Project filters">
            <button
              type="button"
              className={`project-filter${filter === "All" ? " active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>

            {allTech.map((tech) => (
              <button
                type="button"
                key={tech}
                className={`project-filter${filter === tech ? " active" : ""}`}
                onClick={() => setFilter(tech)}
              >
                {techIcons[tech] ?? null}
                <span>{tech}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const index = projects.indexOf(project);

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard className="project-card" max={6}>
                    <button
                      type="button"
                      className="project-card-btn"
                      onClick={() => setOpenProjectTitle(project.title)}
                      aria-label={`View case study for ${project.title}`}
                    >
                      <div className="project-card-head">
                        <span
                          className="project-icon"
                          style={{ backgroundImage: gradients[index % gradients.length] }}
                          aria-hidden
                        >
                          {project.title.charAt(0)}
                        </span>
                        <span className="project-card-heading">
                          <span className="project-card-title">{project.title}</span>
                          <span className="project-card-category">{categoryOf(project)}</span>
                        </span>
                        {project.featured ? (
                          <span className="project-featured">Featured</span>
                        ) : (
                          <span className="project-platform">{platformOf(project)}</span>
                        )}
                      </div>

                      <p className="project-card-desc">{project.description}</p>

                      <div className="project-badges">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span key={tech} className="project-badge">
                            {techIcons[tech] ?? null}
                            <span>{tech}</span>
                          </span>
                        ))}
                        {project.tech.length > 4 ? (
                          <span className="project-badge project-badge-more">
                            +{project.tech.length - 4}
                          </span>
                        ) : null}
                      </div>

                      <span className="project-card-cta">
                        View case study
                        <FaArrowRight aria-hidden />
                      </span>
                    </button>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog.Root
        open={openProject !== null}
        onOpenChange={(open) => {
          if (!open) setOpenProjectTitle(null);
        }}
      >
        <AnimatePresence>
          {openProject ? (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="project-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild aria-describedby={undefined}>
                <motion.div
                  className="project-modal"
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {(() => {
                    const detail = parseProject(openProject.longDescription);
                    const gradient = gradients[openIndex % gradients.length];

                    return (
                      <>
                        <header className="project-modal-hero" style={{ backgroundImage: gradient }}>
                          <div className="project-modal-hero-overlay" aria-hidden />
                          <Dialog.Close asChild>
                            <button type="button" className="project-modal-x" aria-label="Close">
                              <FaTimes />
                            </button>
                          </Dialog.Close>

                          <div className="project-modal-heading">
                            <span className="project-modal-icon" aria-hidden>
                              {openProject.title.charAt(0)}
                            </span>
                            <div>
                              <span className="project-modal-category">{categoryOf(openProject)}</span>
                              <Dialog.Title className="project-modal-title">
                                {openProject.title}
                              </Dialog.Title>
                              <span className="project-modal-platform">
                                {platformOf(openProject)}
                              </span>
                            </div>
                          </div>
                        </header>

                        <div className="project-modal-body">
                          {detail.overview ? (
                            <p className="project-modal-overview">{detail.overview}</p>
                          ) : null}

                          {detail.features.length > 0 ? (
                            <section className="project-modal-section">
                              <h4>Key Features</h4>
                              <ul className="project-feature-list">
                                {detail.features.map((feature) => (
                                  <li key={feature}>
                                    <span className="project-feature-check" aria-hidden>
                                      <FaCheck />
                                    </span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ) : null}

                          <div className="project-modal-meta">
                            {detail.techStack ? (
                              <div className="project-meta-card">
                                <h5>Tech Stack</h5>
                                <p>{detail.techStack}</p>
                              </div>
                            ) : null}
                            {detail.role ? (
                              <div className="project-meta-card project-meta-card-role">
                                <h5>My Role</h5>
                                <p>{detail.role}</p>
                              </div>
                            ) : null}
                          </div>

                          <div className="project-modal-tech">
                            {openProject.tech.map((tech) => (
                              <span
                                key={`modal-${openProject.title}-${tech}`}
                                className="project-badge"
                              >
                                {techIcons[tech] ?? null}
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>

                          {openProject.github || openProject.live ? (
                            <div className="project-modal-links">
                              {openProject.github ? (
                                <a
                                  href={openProject.github}
                                  target="_blank"
                                  rel="noopener"
                                  className="project-link"
                                >
                                  <FaGithub />
                                  GitHub
                                </a>
                              ) : null}
                              {openProject.live ? (
                                <a
                                  href={openProject.live}
                                  target="_blank"
                                  rel="noopener"
                                  className="project-link"
                                >
                                  <FaExternalLinkAlt />
                                  Live Demo
                                </a>
                              ) : null}
                            </div>
                          ) : (
                            <p className="project-modal-note">
                              Delivered as a production client app — source under NDA.
                            </p>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}

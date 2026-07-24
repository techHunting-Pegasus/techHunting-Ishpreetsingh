"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTION_IDS = ["home", "services", "skills", "projects", "contact"] as const;

function toLabel(sectionId: string) {
  return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<(typeof SECTION_IDS)[number]>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const handleNavClick = (sectionId: (typeof SECTION_IDS)[number]) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const viewportAnchor = 170;
      let current: (typeof SECTION_IDS)[number] = "home";

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportAnchor && rect.bottom > viewportAnchor) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Main navigation">
      <motion.div className="scroll-progress" aria-hidden style={{ scaleX: progress }} />

      <div className="container nav-shell">
        <button
          type="button"
          className="brand"
          aria-label="Go to home section"
          onClick={() => handleNavClick("home")}
        >
          <Image
            src="/company-logo.png"
            alt="TechHunting logo"
            width={40}
            height={40}
            className="brand-logo"
          />
          <span className="brand-text">
            <span className="brand-wordmark">TechHunting</span>
            <span className="brand-sub">Ishpreet Singh</span>
          </span>
        </button>

        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <ul id="site-nav-links" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {SECTION_IDS.map((sectionId) => (
            <li key={sectionId}>
              <button
                type="button"
                className={`nav-link${activeSection === sectionId ? " active" : ""}`}
                onClick={() => handleNavClick(sectionId)}
                aria-current={activeSection === sectionId ? "page" : undefined}
              >
                {toLabel(sectionId)}
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="nav-cta" onClick={() => handleNavClick("contact")}>
          Start Project
        </button>
      </div>
    </nav>
  );
}

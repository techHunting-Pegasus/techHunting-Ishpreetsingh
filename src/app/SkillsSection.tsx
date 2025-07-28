'use client';
import { useState } from 'react';
import { FaSwift, FaJs, FaReact, FaApple, FaAndroid, FaBell, FaRegClock, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiFirebase, SiRedux, SiStripe } from 'react-icons/si';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Swift', icon: <FaSwift color="#fa7343" />, level: 95, description: 'Apple’s modern language for iOS, macOS, and more.', projects: ['Fitness App', 'Finance Tracker'] },
      { name: 'JavaScript', icon: <FaJs color="#f7df1e" />, level: 92, description: 'The language of the web and cross-platform apps.', projects: ['Chat App', 'E-commerce'] },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" />, level: 88, description: 'Typed superset of JavaScript for safer code.', projects: ['Admin Dashboard'] },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'UIKit', icon: <FaApple color="#2346a0" />, level: 90, description: 'Apple’s UI framework for building iOS interfaces.', projects: ['Health Tracker'] },
      { name: 'SwiftUI', icon: <FaApple color="#2346a0" />, level: 85, description: 'Declarative UI framework for Apple platforms.', projects: ['Recipe App'] },
      { name: 'React Native', icon: <FaReact color="#61dafb" />, level: 93, description: 'Build native mobile apps using React.', projects: ['Social Network'] },
      { name: 'Flutter', icon: <SiFlutter color="#02569B" />, level: 80, description: 'Google’s UI toolkit for natively compiled apps.', projects: ['Travel App'] },
      { name: 'Redux', icon: <SiRedux color="#764abc" />, level: 80, description: 'State management for React/React Native.', projects: ['E-commerce'] },
    ],
  },
  {
    name: 'Platforms',
    skills: [
      { name: 'WatchOS', icon: <FaAppleAlt color="#000" />, level: 75, description: 'Apps and experiences for Apple Watch.', projects: ['Fitness App'] },
      { name: 'HealthKit', icon: <FaHeartbeat color="#00b894" />, level: 78, description: 'Integrate health and fitness data on iOS.', projects: ['Health Tracker'] },
      { name: 'Firebase', icon: <SiFirebase color="#ffcb2b" />, level: 85, description: 'Backend-as-a-service for real-time apps.', projects: ['Chat App', 'Analytics'] },
      { name: 'Apple', icon: <FaApple color="#2346a0" />, level: 90, description: 'iOS, macOS, watchOS, tvOS platforms.', projects: ['All iOS Apps'] },
      { name: 'Android', icon: <FaAndroid color="#3ddc84" />, level: 70, description: 'Android platform for mobile apps.', projects: ['Travel App'] },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Push Notifications', icon: <FaBell color="#2346a0" />, level: 87, description: 'Real-time user engagement on mobile.', projects: ['News App'] },
      { name: 'Subscriptions', icon: <SiStripe color="#635bff" />, level: 82, description: 'In-app purchases and recurring payments.', projects: ['Finance Tracker'] },
      { name: 'Realtime', icon: <FaRegClock color="#2346a0" />, level: 80, description: 'Realtime data and updates.', projects: ['Chat App'] },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const currentSkills = skillCategories[activeTab].skills;

  return (
    <section id="skills" style={{ width: '100%', maxWidth: 1200, margin: '0 auto', marginTop: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.2rem', letterSpacing: '-1px' }}>Skills</h2>
      <div className="skills-tabs">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={`skills-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => { setActiveTab(idx); setExpanded(null); }}
            type="button"
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {currentSkills.map((skill, idx) => (
          <div
            key={skill.name}
            className={`skill-card${expanded === idx ? ' expanded' : ''}`}
            tabIndex={0}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            onBlur={() => setExpanded(null)}
            onMouseEnter={() => setExpanded(idx)}
            onMouseLeave={() => setExpanded(null)}
            aria-label={skill.description}
          >
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }} />
            </div>
            <div className="skill-desc" style={{ maxHeight: expanded === idx ? 120 : 0, opacity: expanded === idx ? 1 : 0 }}>
              <div>{skill.description}</div>
              {skill.projects && (
                <div className="skill-projects">
                  <span>Projects:</span> {skill.projects.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .skills-tabs {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 2.2rem;
          flex-wrap: wrap;
        }
        .skills-tab {
          background: #e6ecfa;
          color: var(--color-royal-blue);
          border: none;
          border-radius: 0.7rem 0.7rem 0 0;
          padding: 0.7rem 1.7rem;
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          outline: none;
        }
        .skills-tab.active, .skills-tab:hover, .skills-tab:focus {
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          color: #fff;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          width: 100%;
        }
        .skill-card {
          background: rgba(248,249,250,0.92);
          border-radius: 1.2rem;
          box-shadow: 0 4px 24px var(--color-shadow);
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
          transition: box-shadow 0.22s, transform 0.22s;
          position: relative;
          min-height: 110px;
          outline: none;
        }
        .skill-card:hover, .skill-card:focus, .skill-card.expanded {
          box-shadow: 0 8px 32px var(--color-shadow);
          transform: scale(1.035) translateY(-2px);
        }
        .skill-header {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 0.7rem;
          gap: 0.7rem;
        }
        .skill-icon {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-name {
          font-weight: 700;
          color: var(--color-royal-blue);
          font-size: 1.13rem;
          flex: 1;
        }
        .skill-level {
          font-size: 0.98rem;
          color: var(--color-accent);
          font-weight: 600;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e6ecfa;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 0.7rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          border-radius: 6px;
          transition: width 0.7s cubic-bezier(.4,0,.2,1);
        }
        .skill-desc {
          font-size: 0.98rem;
          color: var(--color-dark-blue);
          margin-top: 0.5rem;
          transition: max-height 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s;
          overflow: hidden;
        }
        .skill-projects {
          font-size: 0.93rem;
          color: var(--color-royal-blue);
          margin-top: 0.3rem;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .skill-card {
            padding: 1rem 0.7rem 0.7rem 0.7rem;
            min-height: 90px;
          }
          .skill-name {
            font-size: 1rem;
          }
          .skill-level {
            font-size: 0.9rem;
          }
          .skill-desc {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </section>
  );
} 
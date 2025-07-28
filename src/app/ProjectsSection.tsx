'use client';
import { useState, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { FaApple, FaReact, FaGithub, FaExternalLinkAlt, FaHeart, FaRegCalendarAlt } from 'react-icons/fa';
import { SiFlutter, SiFirebase } from 'react-icons/si';

const projects = [
  {
    title: 'iDrop',
    featured: true,
    description: 'iOS Shopping App for seamless online purchases.',
    longDescription: `iDrop is a modern iOS shopping app designed for a frictionless user experience. It features real-time inventory, Apple Pay integration, and a beautiful, intuitive UI. 

**Key Features:**
- Real-time product updates and inventory
- Secure Apple Pay checkout
- Personalized recommendations
- Order tracking and push notifications

**Tech Stack:** Swift, UIKit, Firebase, Apple Pay

**My Role:** Led the iOS development, designed the UI, and implemented payment flows.
`,
    image: '',
    tech: ['iOS', 'Swift', 'Firebase', 'Shopping'],
    github: '',
    live: '',
  },
  {
    title: 'goPiviot',
    description: 'iOS Health & Apple Watch App for fitness tracking.',
    longDescription: `goPiviot helps users track workouts, health metrics, and syncs seamlessly with Apple Watch. The app provides detailed analytics, motivational streaks, and integrates with HealthKit.

**Key Features:**
- Apple Watch sync
- HealthKit integration
- Workout analytics and streaks
- Customizable goals

**Tech Stack:** Swift, SwiftUI, HealthKit, WatchOS

**My Role:** Architected the WatchOS sync and built the analytics dashboard.`,
    image: '',
    tech: ['iOS', 'Swift', 'Health', 'WatchOS'],
    github: '',
    live: '',
  },
  {
    title: 'TWR',
    description: 'Bible & News App for daily inspiration and updates.',
    longDescription: `TWR combines scripture reading with curated news in a single, easy-to-use app. Users can bookmark verses, receive daily devotionals, and stay updated with relevant news.

**Key Features:**
- Bible reading and search
- Daily devotionals
- News feed integration
- Bookmarking and sharing

**Tech Stack:** React Native, Firebase, News API, iOS, Swift

**My Role:** Built the news feed and devotional modules, and led cross-platform deployment.`,
    image: '',
    tech: ['React Native', 'News', 'Firebase', 'iOS', 'Swift'],
    github: '',
    live: '',
  },
  {
    title: 'By the Way',
    description: 'React Native Dating App for meaningful connections.',
    longDescription: `By the Way is a dating app focused on real conversations and genuine matches. It features advanced matching algorithms, in-app chat, and robust privacy controls.

**Key Features:**
- Smart matching algorithm
- Secure in-app chat
- Profile verification
- Privacy-first design

**Tech Stack:** React Native, Firebase, Node.js

**My Role:** Developed the chat system and implemented privacy features.`,
    image: '',
    tech: ['React Native', 'Dating', 'Chat'],
    github: '',
    live: '',
  },
  {
    title: 'Rallii',
    description: 'Event Organizer App for seamless event planning.',
    longDescription: `Rallii helps users organize, invite, and manage events with ease. Features include RSVP, reminders, group chat, and calendar sync.

**Key Features:**
- Event creation and invitations
- RSVP and reminders
- Group chat
- Calendar integration

**Tech Stack:** React Native, Firebase, Google Calendar API

**My Role:** Led React Native development and built the calendar sync module.`,
    image: '',
    tech: ['React Native', 'Event', 'Calendar'],
    github: '',
    live: '',
  },
  {
    title: 'CFL',
    description: 'News & Publishing App for curated content.',
    longDescription: `CFL is a platform for news, articles, and publishing, with a clean reading experience. It supports push notifications, user comments, and editorial tools.

**Key Features:**
- Curated news and articles
- Push notifications
- User comments
- Editorial dashboard

**Tech Stack:** React Native, Firebase, Node.js, iOS, Swift

**My Role:** Built the editorial dashboard and notification system.`,
    image: '',
    tech: ['React Native', 'News', 'Publishing', 'iOS', 'Swift'],
    github: '',
    live: '',
  },
  {
    title: 'ICEF',
    description: 'Flutter Event App for conferences and meetups.',
    longDescription: `ICEF provides event schedules, speaker bios, and live updates for conferences. Attendees can build custom agendas and receive real-time notifications.

**Key Features:**
- Event schedule and agenda
- Speaker bios
- Live updates
- Customizable notifications

**Tech Stack:** Flutter, Firebase

**My Role:** Developed the agenda builder and live update system.`,
    image: '',
    tech: ['Flutter', 'Event', 'Conference'],
    github: '',
    live: '',
  },
  {
    title: 'MiloCare',
    description: 'Flutter Health App for personal wellness.',
    longDescription: `MiloCare helps users track health goals, connect with providers, and monitor progress. The app features secure messaging, appointment scheduling, and health analytics.

**Key Features:**
- Health goal tracking
- Secure provider messaging
- Appointment scheduling
- Analytics dashboard

**Tech Stack:** Flutter, Firebase, HealthKit

**My Role:** Built the analytics dashboard and provider messaging system.`,
    image: '',
    tech: ['Flutter', 'Health', 'Analytics'],
    github: '',
    live: '',
  },
];

const gradients = [
  'linear-gradient(135deg, #2346a0 0%, #0d1b3f 100%)',
  'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)',
  'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  'linear-gradient(135deg, #ffaf7b 0%, #d76d77 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
  'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
  'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)',
];

const techIcons: { [key: string]: ReactElement } = {
  'iOS': <FaApple color="#2346a0" title="iOS" />, 'Swift': <FaApple color="#fa7343" title="Swift" />, 'Firebase': <SiFirebase color="#ffcb2b" title="Firebase" />, 'Shopping': <FaHeart color="#e17055" title="Shopping" />,
  'Health': <FaHeart color="#00b894" title="Health" />, 'WatchOS': <FaApple color="#000" title="WatchOS" />, 'React Native': <FaReact color="#61dafb" title="React Native" />, 'News': <FaRegCalendarAlt color="#2346a0" title="News" />,
  'Flutter': <SiFlutter color="#02569B" title="Flutter" />, 'Event': <FaRegCalendarAlt color="#2346a0" title="Event" />, 'Calendar': <FaRegCalendarAlt color="#2346a0" title="Calendar" />, 'Publishing': <FaRegCalendarAlt color="#2346a0" title="Publishing" />, 'Conference': <FaRegCalendarAlt color="#2346a0" title="Conference" />, 'Analytics': <FaRegCalendarAlt color="#2346a0" title="Analytics" />, 'Dating': <FaHeart color="#e17055" title="Dating" />, 'Chat': <FaHeart color="#e17055" title="Chat" />
};

const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));

export default function ProjectsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" style={{ width: '100%', maxWidth: 1200, margin: '0 auto', marginTop: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.2rem', letterSpacing: '-1px' }}>Projects</h2>
      <div className="project-filters">
        <button className={`project-filter${filter === 'All' ? ' active' : ''}`} onClick={() => setFilter('All')}>All</button>
        {allTech.map(tech => (
          <button key={tech} className={`project-filter${filter === tech ? ' active' : ''}`} onClick={() => setFilter(tech)}>{techIcons[tech] || tech} {tech}</button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`project-card${project.featured ? ' featured' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ scale: 1.045, boxShadow: '0 8px 32px rgba(35,70,160,0.16)' }}
          >
            {project.featured && <div className="project-featured">Featured</div>}
            <div
              className="project-image"
              style={{ background: gradients[idx % gradients.length] }}
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="project-tech-badge">{techIcons[tech] || tech} {tech}</span>
                ))}
              </div>
              <Dialog.Root open={openIdx === idx} onOpenChange={(open: boolean) => setOpenIdx(open ? idx : null)}>
                <Dialog.Trigger asChild>
                  <button className="project-btn">View Project</button>
                </Dialog.Trigger>
                <AnimatePresence>
                  {openIdx === idx && (
                    <Dialog.Portal forceMount>
                      <Dialog.Overlay asChild>
                        <motion.div
                          className="project-modal-overlay"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        />
                      </Dialog.Overlay>
                      <Dialog.Content asChild>
                        <motion.div
                          className="project-modal"
                          initial={{ scale: 0.92, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.92, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="project-modal-image" style={{ background: gradients[idx % gradients.length] }} />
                          <Dialog.Title asChild>
                            <h3>{project.title}</h3>
                          </Dialog.Title>
                          <p style={{ margin: '1.2rem 0 1.7rem 0', color: 'var(--color-dark-blue)' }}>{project.longDescription.split('\n\n').map((para, i) => <span key={i} style={{ display: 'block', marginBottom: '0.7rem' }} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}</p>
                          <div className="project-modal-tech">
                            {project.tech.map(tech => (
                              <span key={tech} className="project-tech-badge">{techIcons[tech] || tech} {tech}</span>
                            ))}
                          </div>
                          <div className="project-modal-links">
                            {project.github && <a href={project.github} target="_blank" rel="noopener" className="project-link"><FaGithub /> GitHub</a>}
                            {project.live && <a href={project.live} target="_blank" rel="noopener" className="project-link"><FaExternalLinkAlt /> See Live</a>}
                          </div>
                          <button className="project-btn" onClick={() => setOpenIdx(null)}>Close</button>
                        </motion.div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  )}
                </AnimatePresence>
              </Dialog.Root>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .project-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          justify-content: center;
          margin-bottom: 2.2rem;
        }
        .project-filter {
          background: #e6ecfa;
          color: var(--color-royal-blue);
          border: none;
          border-radius: 0.7rem;
          padding: 0.5rem 1.2rem;
          font-size: 1.02rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          outline: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .project-filter.active, .project-filter:hover, .project-filter:focus {
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          color: #fff;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 2.5rem;
          width: 100%;
        }
        .project-card {
          background: rgba(248,249,250,0.92);
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px var(--color-shadow);
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          overflow: hidden;
          transition: box-shadow 0.22s, transform 0.22s;
          cursor: pointer;
          min-height: 340px;
          position: relative;
          align-self: center;
        }
        .project-card.featured {
          border: 2.5px solid #2346a0;
        }
        .project-featured {
          position: absolute;
          top: 0.9rem;
          right: -2.2rem;
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 0.3rem 2.2rem;
          border-radius: 1.2rem;
          transform: rotate(22deg);
          z-index: 2;
          box-shadow: 0 2px 8px var(--color-shadow);
        }
        .project-image {
          width: 100%;
          height: 160px;
          border-radius: 1.5rem 1.5rem 0 0;
          background-size: cover;
          background-position: center;
        }
        .project-content {
          padding: 1.5rem 1.2rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-content h3 {
          margin: 0 0 0.7rem 0;
          color: var(--color-royal-blue);
          font-size: 1.22rem;
          font-weight: 700;
        }
        .project-content p {
          color: var(--color-dark-blue);
          font-size: 1.05rem;
          margin-bottom: 1.2rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.1rem;
        }
        .project-tech-badge {
          background: #e6ecfa;
          color: var(--color-royal-blue);
          border-radius: 0.7rem;
          padding: 0.22rem 0.85rem;
          font-size: 0.93rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .project-btn {
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          color: #fff;
          border: none;
          border-radius: 0.7rem;
          padding: 0.7rem 1.7rem;
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px var(--color-shadow);
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
        }
        .project-btn:hover, .project-btn:focus {
          background: linear-gradient(90deg, #0d1b3f 60%, #2346a0 100%);
          color: #fff;
          box-shadow: 0 4px 16px var(--color-shadow);
        }
        .project-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(24, 26, 27, 0.55);
          z-index: 1000;
        }
        .project-modal {
          position: fixed;
          top: 10%;
          left: 10%;
          right: 10%;

          transform: translate(-50%, -50%);
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 8px 32px rgba(35,70,160,0.16);
          padding: 2.5rem 2rem 2rem 2rem;
          min-width: 320px;
          max-width: 95vw;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          align-items: center;
        
        }
        .project-modal-image {
          width: 100%;
          height: 120px;
          border-radius: 1.2rem 1.2rem 0 0;
          margin-bottom: 1.2rem;
        }
        .project-modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.1rem;
        }
        .project-modal-links {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }
        .project-link {
          color: var(--color-royal-blue);
          font-size: 1.08rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.18s;
        }
        .project-link:hover, .project-link:focus {
          color: #0d1b3f;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .project-modal {
            padding: 1.2rem 0.7rem 1.1rem 0.7rem;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
} 
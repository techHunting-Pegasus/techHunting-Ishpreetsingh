"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function HomeSection() {
  return (
    <main className="hero-main">
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-name">Ishpreet Singh</span>
            <br />
            <span className="hero-typewriter">
              <span className="typewriter-text">iOS &amp; React Native Developer</span>
            </span>
          </h1>
          <p className="hero-subtext">
            Senior mobile developer with 5+ years of experience building beautiful, scalable, and efficient mobile applications. 
            Specialized in iOS native development and React Native cross-platform solutions.
          </p>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/ishpreet-singh-598726219/" target="_blank" rel="noopener" aria-label="LinkedIn" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/techHunting-Pegasus" target="_blank" rel="noopener" aria-label="GitHub" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="mailto:ishpreetsingh8386@gmail.com" aria-label="Email" className="social-link">
              <FaEnvelope size={20} />
            </a>
          </div>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-right">
          {/* Classic illustration */}
          <div className="hero-illustration">
            <div className="classic-device">
              <div className="device-screen">
                <div className="code-lines">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line short"></div>
                  <div className="code-line"></div>
                  <div className="code-line short"></div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="element element-1">⚛️</div>
              <div className="element element-2">📱</div>
              <div className="element element-3">💻</div>
              <div className="element element-4">🔧</div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .hero-main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--color-background);
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }
        .hero-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          padding: 0 2rem;
          gap: 4rem;
        }
        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          max-width: 600px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--color-accent-navy);
          margin-bottom: 2rem;
          line-height: 1.1;
          text-align: left;
        }
        .hero-name {
          color: var(--color-accent-burgundy);
          font-style: italic;
        }
        .hero-typewriter {
          display: inline-block;
          margin-left: 0;
        }
        .typewriter-text {
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2.5s steps(30, end) 1;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 600;
          color: var(--color-text-secondary);
          font-style: italic;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .hero-subtext {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
          line-height: 1.8;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-socials {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .social-link {
          color: var(--color-accent-navy);
          background: var(--color-paper);
          border: 1px solid var(--color-border);
          border-radius: 0;
          box-shadow: 0 2px 8px var(--color-shadow);
          padding: 1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-link:hover {
          background: var(--color-accent-navy);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--color-shadow-dark);
          border-color: var(--color-accent-navy);
        }
        .hero-cta-group {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hero-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .hero-illustration {
          position: relative;
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .classic-device {
          width: 200px;
          height: 300px;
          border: 3px solid var(--color-accent-navy);
          border-radius: 8px;
          background: var(--color-paper);
          box-shadow: 0 8px 32px var(--color-shadow-dark);
          position: relative;
          overflow: hidden;
        }
        .device-screen {
          width: 100%;
          height: 100%;
          background: var(--color-background);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .code-lines {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .code-line {
          height: 8px;
          background: var(--color-accent-navy);
          border-radius: 2px;
          opacity: 0.7;
        }
        .code-line.short {
          width: 60%;
        }
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .element {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.8;
          animation: float 6s ease-in-out infinite;
        }
        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        .element-2 {
          top: 20%;
          right: 15%;
          animation-delay: 1.5s;
        }
        .element-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 3s;
        }
        .element-4 {
          bottom: 20%;
          right: 10%;
          animation-delay: 4.5s;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }
          .hero-left {
            align-items: center;
          }
          .hero-title {
            text-align: center;
          }
          .hero-illustration {
            width: 300px;
            height: 300px;
          }
          .classic-device {
            width: 150px;
            height: 225px;
          }
        }
        @media (max-width: 600px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn-primary,
          .hero-cta-group .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-illustration {
            width: 250px;
            height: 250px;
          }
          .classic-device {
            width: 120px;
            height: 180px;
          }
        }
      `}</style>
    </main>
  );
} 
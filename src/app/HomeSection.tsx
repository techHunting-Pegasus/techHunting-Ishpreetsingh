"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <main className="hero-main">
      
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Ishpreet Singh</span>
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
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/techHunting-Pegasus" target="_blank" rel="noopener" aria-label="GitHub" className="social-link">
              <FaGithub size={24} />
            </a>
            <a href="mailto:ishpreetsingh8386@gmail.com" aria-label="Email" className="social-link">
              <FaEnvelope size={24} />
            </a>
          </div>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-right">
          {/* Professional mobile development illustration */}
          <svg width="420" height="420" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
            <defs>
              <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2346a0" />
                <stop offset="100%" stopColor="#0d1b3f" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8f9fa" />
                <stop offset="100%" stopColor="#e6ecfa" />
              </linearGradient>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#61dafb" />
                <stop offset="100%" stopColor="#2346a0" />
              </linearGradient>
              <linearGradient id="swiftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#f7931e" />
              </linearGradient>
            </defs>
            
            {/* Subtle background grid */}
            <g opacity="0.1">
              <line x1="0" y1="40" x2="320" y2="40" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="320" y2="80" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="120" x2="320" y2="120" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="160" x2="320" y2="160" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="200" x2="320" y2="200" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="240" x2="320" y2="240" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="0" y1="280" x2="320" y2="280" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="40" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="80" y1="0" x2="80" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="120" y1="0" x2="120" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="160" y1="0" x2="160" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="200" y1="0" x2="200" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="240" y1="0" x2="240" y2="320" stroke="#2346a0" strokeWidth="0.5" />
              <line x1="280" y1="0" x2="280" y2="320" stroke="#2346a0" strokeWidth="0.5" />
            </g>
            
            {/* Professional iPhone design */}
            <rect x="120" y="80" width="80" height="160" rx="12" fill="url(#phoneGrad)" stroke="#2346a0" strokeWidth="1.5" />
            <rect x="125" y="90" width="70" height="130" rx="8" fill="url(#screenGrad)" />
            
            {/* Clean home indicator */}
            <rect x="150" y="225" width="20" height="3" rx="1.5" fill="#2346a0" opacity="0.7" />
            
            {/* Minimalist app grid */}
            <rect x="135" y="105" width="12" height="12" rx="2" fill="#2346a0" opacity="0.8" />
            <rect x="155" y="105" width="12" height="12" rx="2" fill="#61dafb" opacity="0.8" />
            <rect x="175" y="105" width="12" height="12" rx="2" fill="#ff6b35" opacity="0.8" />
            <rect x="135" y="125" width="12" height="12" rx="2" fill="#61dafb" opacity="0.6" />
            <rect x="155" y="125" width="12" height="12" rx="2" fill="#ff6b35" opacity="0.6" />
            <rect x="175" y="125" width="12" height="12" rx="2" fill="#2346a0" opacity="0.6" />
            
            {/* Professional code snippets */}
            <text x="60" y="100" fill="url(#codeGrad)" fontSize="10" fontFamily="monospace" fontWeight="500" opacity="0.9">
              &lt;View&gt;
            </text>
            <text x="240" y="120" fill="url(#codeGrad)" fontSize="10" fontFamily="monospace" fontWeight="500" opacity="0.9">
              &lt;/View&gt;
            </text>
            <text x="70" y="200" fill="url(#codeGrad)" fontSize="10" fontFamily="monospace" fontWeight="500" opacity="0.9">
              useState
            </text>
            <text x="250" y="180" fill="url(#codeGrad)" fontSize="10" fontFamily="monospace" fontWeight="500" opacity="0.9">
              useEffect
            </text>
            
            {/* iOS code elements */}
            <text x="60" y="140" fill="url(#swiftGrad)" fontSize="9" fontFamily="monospace" fontWeight="500" opacity="0.9">
              class ViewController
            </text>
            <text x="240" y="160" fill="url(#swiftGrad)" fontSize="9" fontFamily="monospace" fontWeight="500" opacity="0.9">
              @IBOutlet
            </text>
            <text x="70" y="220" fill="url(#swiftGrad)" fontSize="9" fontFamily="monospace" fontWeight="500" opacity="0.9">
              UIKit
            </text>
            <text x="250" y="200" fill="url(#swiftGrad)" fontSize="9" fontFamily="monospace" fontWeight="500" opacity="0.9">
              SwiftUI
            </text>
            
            {/* Subtle animated elements */}
            <circle cx="80" cy="80" r="4" fill="#61dafb" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="240" r="3" fill="#61dafb" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="80" r="3" fill="#ff6b35" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="240" r="4" fill="#ff6b35" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Professional connection lines */}
            <line x1="160" y1="160" x2="80" y2="80" stroke="#61dafb" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="6s" repeatCount="indefinite" />
            </line>
            <line x1="160" y1="160" x2="240" y2="240" stroke="#61dafb" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" />
            </line>
            <line x1="160" y1="160" x2="240" y2="80" stroke="#ff6b35" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="6.5s" repeatCount="indefinite" />
            </line>
            <line x1="160" y1="160" x2="80" y2="240" stroke="#ff6b35" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7.5s" repeatCount="indefinite" />
            </line>
            
            {/* Professional badges */}
            <rect x="140" y="150" width="40" height="16" rx="8" fill="#2346a0" opacity="0.9" />
            <text x="160" y="161" fill="white" fontSize="7" fontFamily="monospace" fontWeight="600" textAnchor="middle">
              iOS
            </text>
            <rect x="140" y="170" width="40" height="16" rx="8" fill="#61dafb" opacity="0.9" />
            <text x="160" y="181" fill="white" fontSize="7" fontFamily="monospace" fontWeight="600" textAnchor="middle">
              RN
            </text>
            
            {/* Subtle tech indicators */}
            <text x="90" y="280" fill="#2346a0" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
              ⚛️
            </text>
            <text x="220" y="60" fill="#ff6b35" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
              📱
            </text>
            <text x="40" y="180" fill="#ff6b35" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.6">
              💻
            </text>
          </svg>
        </div>
      </section>
      <style>{`
        .hero-main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e6ecfa 100%);
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }
        .hero-logo {
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 10;
        }
        .hero-logo-image {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(35, 70, 160, 0.15);
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }
        .hero-logo-image:hover {
          transform: scale(1.05);
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
          color: var(--color-royal-blue);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .hero-name {
          background: linear-gradient(135deg, #2346a0 0%, #0d1b3f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-typewriter {
          display: inline-block;
          margin-left: 0.5rem;
        }
        .typewriter-text {
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2.5s steps(30, end) 1;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          font-weight: 600;
          color: var(--color-text-secondary);
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .hero-subtext {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.7;
        }
        .hero-socials {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .social-link {
          color: var(--color-royal-blue);
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(35, 70, 160, 0.1);
          padding: 0.75rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(35, 70, 160, 0.1);
        }
        .social-link:hover {
          background: var(--color-royal-blue);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(35, 70, 160, 0.2);
        }
        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .hero-svg {
          width: 420px;
          height: 420px;
          max-width: 90vw;
          filter: drop-shadow(0 8px 32px rgba(35,70,160,0.10));
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
          .hero-logo {
            top: 1rem;
            left: 1rem;
          }
          .hero-logo-image {
            width: 40px;
            height: 40px;
          }
          .hero-svg {
            width: 320px;
            height: 320px;
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
        }
      `}</style>
    </main>
  );
} 
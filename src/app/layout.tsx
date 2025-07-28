"use client";
import Image from 'next/image';
import './globals.css';
import { useState } from "react";

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Simple scroll to section
    if (sectionId === 'home') {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left side - Logo and Name */}
        <div className="nav-logo">
          <Image 
            src="/company-logo.png" 
            alt="Company Logo" 
            width={40} 
            height={40}

          />
          <span className="logo-text">TechHunting</span>
        </div>
        
        {/* Center - Navigation Menu */}
        <div className="nav-center">
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        
        {/* Right side - Empty for balance */}
        <div className="nav-right"></div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ishpreet Singh - iOS & React Native Developer</title>
        <meta name="description" content="Portfolio of Ishpreet Singh, iOS & React Native Developer. Building beautiful, scalable, and efficient mobile apps." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        {children}
        <style>{`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(35, 70, 160, 0.1);
            z-index: 1000;
            padding: 0.75rem 0;
          }
          .nav-container {
            margin: 0 auto;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            gap: 2rem;
          }
          .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--color-royal-blue);
            margin-right: 20px;
          }
         
          .logo-text {
            background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
          }
          .nav-center {
            display: flex;
            justify-content: center;
          }
          .nav-menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 2.5rem;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50px;
            padding: 0.5rem 1.5rem;
            box-shadow: 0 4px 20px rgba(35, 70, 160, 0.1);
            border: 1px solid rgba(35, 70, 160, 0.1);
          }
          .nav-menu li {
            margin: 0;
            padding: 0;
          }
          .nav-link {
            background: none;
            border: none;
            color: var(--color-dark-blue);
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s ease;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            position: relative;
            white-space: nowrap;
            cursor: pointer;
            user-select: none;
            font-family: inherit;
          }
          .nav-link:hover {
            color: var(--color-royal-blue);
            background: rgba(35, 70, 160, 0.05);
            transform: translateY(-1px);
          }
          .nav-link.active {
            color: #fff !important;
            background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%) !important;
            box-shadow: 0 2px 12px rgba(35, 70, 160, 0.3) !important;
          }
          .nav-link.active:hover {
            color: #fff !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 16px rgba(35, 70, 160, 0.4) !important;
          }
          .nav-right {
            /* Empty div for grid balance */
          }
          @media (max-width: 768px) {
            .nav-container {
              padding: 0 1rem;
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            .nav-logo {
              justify-content: center;
            }
            .nav-center {
              order: 2;
            }
            .nav-menu {
              gap: 1rem;
              padding: 0.4rem 1rem;
              flex-wrap: wrap;
              justify-content: center;
            }
            .nav-link {
              font-size: 0.9rem;
              padding: 0.4rem 0.8rem;
            }
            .logo-text {
              display: none;
            }
          }
          @media (max-width: 480px) {
            .nav-menu {
              gap: 0.5rem;
              padding: 0.3rem 0.8rem;
            }
            .nav-link {
              font-size: 0.85rem;
              padding: 0.3rem 0.6rem;
            }
          }
        `}</style>
      </body>
    </html>
  )
}

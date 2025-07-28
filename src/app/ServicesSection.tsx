import { FaApple, FaReact, FaGooglePlay, FaBug, FaSyncAlt, FaBolt, FaLink } from 'react-icons/fa';
import { SiFlutter, SiAppstore, SiStripe } from 'react-icons/si';

export default function ServicesSection() {
  return (
    <section id="services" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.2rem', letterSpacing: '-1px' }}>Services</h2>
      <div className="services-grid-pro">
        {/* Mobile App Development */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <FaApple size={36} title="iOS" />
            <FaReact size={36} style={{ marginLeft: 8 }} title="React Native" />
            <SiFlutter size={36} style={{ marginLeft: 8, color: '#02569B' }} title="Flutter" />
          </div>
          <h3>Mobile App Development</h3>
          <div className="service-badges">
            <span>iOS</span>
            <span>React Native</span>
            <span>Flutter</span>
          </div>
          <p>Beautiful, scalable, and efficient mobile apps for every platform.</p>
        </div>
        {/* Project Maintenance & Feature Updates */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <FaSyncAlt size={36} />
          </div>
          <h3>Project Maintenance & Feature Updates</h3>
          <p>Keep your app fresh, secure, and up-to-date with new features.</p>
        </div>
        {/* Bug Fixing & Code Refactoring */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <FaBug size={36} />
          </div>
          <h3>Bug Fixing & Code Refactoring</h3>
          <p>Find and fix bugs, improve code quality, and boost maintainability.</p>
        </div>
        {/* App Store & Play Store Publication */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <SiAppstore size={36} />
            <FaGooglePlay size={36} style={{ marginLeft: 8, color: '#34A853' }} />
          </div>
          <h3>App Store & Play Store Publication</h3>
          <div className="service-badges">
            <span>App Store</span>
            <span>Play Store</span>
          </div>
          <p>End-to-end publishing for iOS and Android apps.</p>
        </div>
        {/* Integration (APIs, Payments, Subscriptions) */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <FaLink size={36} />
            <SiStripe size={36} style={{ marginLeft: 8, color: '#635bff' }} />
          </div>
          <h3>Integration</h3>
          <div className="service-badges">
            <span>APIs</span>
            <span>Payments</span>
            <span>Subscriptions</span>
          </div>
          <p>Seamless integration with APIs, payment gateways, and more.</p>
        </div>
        {/* Performance Optimization & UI Enhancements */}
        <div className="service-card-pro">
          <div className="service-icon-pro" style={{ color: '#2346a0' }}>
            <FaBolt size={36} />
          </div>
          <h3>Performance Optimization & UI Enhancements</h3>
          <p>Make your app faster, smoother, and more delightful to use.</p>
        </div>
      </div>
      <style>{`
        .services-grid-pro {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 2.5rem;
          width: 100%;
          margin-bottom: 2rem;
        }
        .service-card-pro {
          background: rgba(248,249,250,0.85);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(35,70,160,0.10), 0 1.5px 8px 0 rgba(35,70,160,0.08);
          padding: 2.5rem 1.7rem 2.2rem 1.7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(.4,0,.2,1), box-shadow 0.28s;
          cursor: pointer;
          min-height: 260px;
          backdrop-filter: blur(6px);
          border: 1.5px solid rgba(35,70,160,0.08);
        }
        .service-card-pro::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(35,70,160,0.08) 0%, rgba(13,27,63,0.07) 100%);
          z-index: 0;
          pointer-events: none;
        }
        .service-card-pro:hover, .service-card-pro:focus {
          transform: scale(1.045) rotateZ(-1.5deg) translateY(-6px);
          box-shadow: 0 16px 48px 0 rgba(35,70,160,0.16), 0 2.5px 12px 0 rgba(35,70,160,0.10);
        }
        .service-icon-pro {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 1.2rem;
          z-index: 1;
        }
        .service-card-pro h3 {
          margin: 0 0 0.7rem 0;
          color: var(--color-royal-blue);
          font-size: 1.28rem;
          font-weight: 700;
          text-align: center;
          z-index: 1;
        }
        .service-card-pro p {
          color: var(--color-dark-blue);
          font-size: 1.08rem;
          text-align: center;
          margin: 0.7rem 0 0 0;
          z-index: 1;
        }
        .service-badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          z-index: 1;
        }
        .service-badges span {
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          color: #fff;
          font-size: 0.92rem;
          font-weight: 500;
          border-radius: 0.7rem;
          padding: 0.22rem 0.85rem;
          letter-spacing: 0.01em;
          box-shadow: 0 1px 4px rgba(35,70,160,0.10);
        }
        .mobile-overlay {
          display: none;
        }
        @media (max-width: 900px) {
          .mobile-overlay {
            display: flex;
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(24, 26, 27, 0.92);
            color: #fff;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            font-weight: 600;
            text-align: center;
            padding: 2rem;
          }
          .services-grid-pro, .service-card-pro {
            filter: blur(2px) grayscale(0.7);
            pointer-events: none;
            user-select: none;
          }
        }
      `}</style>
      <div className="mobile-overlay">This website is best viewed on desktop.</div>
    </section>
  );
} 
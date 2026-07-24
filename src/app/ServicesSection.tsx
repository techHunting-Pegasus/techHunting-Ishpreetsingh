import {
  FaApple,
  FaBolt,
  FaBug,
  FaGooglePlay,
  FaLink,
  FaReact,
  FaSyncAlt,
} from "react-icons/fa";
import { SiAppstore, SiFlutter, SiStripe } from "react-icons/si";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const services = [
  {
    title: "Mobile App Development",
    description:
      "End-to-end app builds for iOS, React Native, and Flutter with clean architecture and polished user flows.",
    tags: ["iOS", "React Native", "Flutter"],
    icon: (
      <>
        <FaApple />
        <FaReact />
        <SiFlutter />
      </>
    ),
  },
  {
    title: "Maintenance and Feature Delivery",
    description:
      "Improve existing apps with faster release cycles, safer refactors, and new capabilities without regressions.",
    tags: ["Roadmap", "Refactor", "Release"],
    icon: <FaSyncAlt />,
  },
  {
    title: "Bug Fixing and Stabilization",
    description:
      "Find root causes quickly, remove crash loops, and raise confidence with better stability and QA readiness.",
    tags: ["Debug", "Quality", "Crash Fix"],
    icon: <FaBug />,
  },
  {
    title: "App Store Publishing",
    description:
      "Launch support for App Store and Play Store including compliance checks, metadata prep, and release handoff.",
    tags: ["App Store", "Play Store", "Submission"],
    icon: (
      <>
        <SiAppstore />
        <FaGooglePlay />
      </>
    ),
  },
  {
    title: "API and Payments Integration",
    description:
      "Integrate APIs, subscriptions, and payment flows with secure handling and reliable backend communication.",
    tags: ["APIs", "Payments", "Subscriptions"],
    icon: (
      <>
        <FaLink />
        <SiStripe />
      </>
    ),
  },
  {
    title: "Performance and UX Optimization",
    description:
      "Tune startup time, interactions, and visual smoothness so your app feels noticeably better in daily use.",
    tags: ["Performance", "UX", "Optimization"],
    icon: <FaBolt />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Built To Ship, Not Just To Demo</h2>
          <p className="section-copy">
            I partner with startups and product teams to move from idea to release quickly, while keeping the
            codebase maintainable for long-term growth.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <TiltCard className="service-card">
                <div className="service-icon" aria-hidden>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

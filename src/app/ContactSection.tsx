"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaExclamationTriangle,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const socials = [
  {
    href: "mailto:ishpreetsingh8386@gmail.com",
    icon: <FaEnvelope />,
    label: "Primary Email",
    value: "ishpreetsingh8386@gmail.com",
  },
  {
    href: "mailto:techhunting786@gmail.com",
    icon: <FaEnvelope />,
    label: "Secondary Email",
    value: "techhunting786@gmail.com",
  },
  {
    href: "tel:+917590809375",
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 75908 09375",
  },
  {
    href: "https://github.com/techHunting-Pegasus",
    icon: <FaGithub />,
    label: "GitHub",
    value: "techHunting-Pegasus",
  },
  {
    href: "https://www.linkedin.com/in/ishpreet-singh-598726219/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "ishpreet-singh-598726219",
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (fieldName: string, value: string): string | undefined => {
    if (!value.trim()) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }

    if (fieldName === "email" && !validateEmail(value)) {
      return "Please enter a valid email address";
    }

    if (fieldName === "name" && value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }

    if (fieldName === "message" && value.trim().length < 10) {
      return "Message should be at least 10 characters";
    }

    return undefined;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSent(false);
    setSubmitError("");

    emailjs
      .sendForm("service_yq0ykck", "template_efgrn8s", formRef.current!, "Bev90hB4V4f22jRsL")
      .then(
        () => {
          setSent(true);
          setLoading(false);
          setErrors({});
          setFormData({ name: "", email: "", message: "" });

          if (formRef.current) {
            formRef.current.reset();
          }
        },
        () => {
          setLoading(false);
          setSubmitError("Message could not be sent right now. Please try again in a moment.");
        },
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal className="contact-header">
          <div className="contact-brand">
            <Image src="/company-logo.png" alt="TechHunting logo" width={58} height={58} className="contact-logo" />
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let&apos;s Build Your Next App</h2>
            </div>
          </div>
          <p className="section-copy">
            Need a dependable mobile developer for a new product or an existing app? Share your goal and I&apos;ll
            reply with the best path to launch.
          </p>
        </Reveal>

        <div className="contact-shell">
          <TiltCard className="contact-card contact-info-card" max={5}>
            <h3>Direct Channels</h3>
            <ul className="contact-info-list">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    className="contact-info-item"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                  >
                    <span className="contact-info-icon" aria-hidden>
                      {social.icon}
                    </span>
                    <span>
                      <strong>{social.label}</strong>
                      <small>{social.value}</small>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </TiltCard>

          <form ref={formRef} className="contact-card contact-form-panel" onSubmit={handleSubmit} autoComplete="off">
            <h3>Send A Message</h3>

            <label className="field-label">
              Name
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="Your name"
                className={`field-input${errors.name ? " error" : ""}`}
              />
              {errors.name ? (
                <span className="field-error">
                  <FaExclamationTriangle size={12} />
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="field-label">
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="you@example.com"
                className={`field-input${errors.email ? " error" : ""}`}
              />
              {errors.email ? (
                <span className="field-error">
                  <FaExclamationTriangle size={12} />
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="field-label">
              Message
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder="Tell me about your project"
                className={`field-textarea${errors.message ? " error" : ""}`}
              />
              {errors.message ? (
                <span className="field-error">
                  <FaExclamationTriangle size={12} />
                  {errors.message}
                </span>
              ) : null}
            </label>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
            </button>

            {sent ? <p className="contact-success">Thanks! Your message has been sent.</p> : null}
            {submitError ? <p className="contact-failure">{submitError}</p> : null}
          </form>
        </div>

        <footer className="site-footer">© {new Date().getFullYear()} TechHunting. All rights reserved.</footer>
      </div>
    </section>
  );
}

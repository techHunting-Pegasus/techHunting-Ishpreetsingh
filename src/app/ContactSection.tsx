'use client';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Image from 'next/image';

const socials = [
  { href: 'mailto:ishpreetsingh8386@gmail.com', icon: <FaEnvelope />, label: 'Email', value: 'ishpreetsingh8386@gmail.com' },
  { href: 'mailto:techhunting786@gmail.com', icon: <FaEnvelope />, label: 'Email', value: 'techhunting786@gmail.com' },
  { href: 'tel:+917590809375', icon: <FaPhone />, label: 'Phone', value: '+91 75908 09375' },
  { href: 'https://github.com/techHunting-Pegasus', icon: <FaGithub />, label: 'GitHub', value: 'ishpreetsingh' },
  { href: 'https://www.linkedin.com/in/ishpreet-singh-598726219/', icon: <FaLinkedin />, label: 'LinkedIn', value: 'ishpreetsingh' },
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
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Field validation function
  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === 'email' && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }

    if (name === 'name' && value.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }

    if (name === 'message' && value.trim().length < 10) {
      return 'Message must be at least 10 characters long';
    }

    return undefined;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle input blur (validate on blur)
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Form submission with validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach(key => {
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

    // If validation passes, submit the form
    setLoading(true);
    setSent(false);
    
    emailjs.sendForm(
      'service_yq0ykck',
      'template_efgrn8s',
      formRef.current!,
      'Bev90hB4V4f22jRsL'
    ).then(
      () => {
        setSent(true);
        setLoading(false);
        setErrors({});
        setFormData({ name: '', email: '', message: '' });
        if (formRef.current) formRef.current.reset();
      },
      (error) => {
        console.log('error', error)
        setLoading(false);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <footer id="contact" style={{ width: '100%', background: 'var(--color-background)', marginTop: '4rem', borderTop: '2px solid var(--color-border)' }}>
      <div className="contact-logo-row">
        <div className="company-logo">
          <Image 
            src="/company-logo.png" 
            alt="Company Logo" 
            width={60} 
            height={60}
            className="company-logo-image"
          />
          <span className="logo-text">TechHunting</span>
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-info">
          <h2>Contact</h2>
          <ul className="contact-list">
            {socials.map((s, i) => (
              <li key={i}>
                <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="contact-social" aria-label={s.label}>
                  <span className="contact-icon-wrapper">{s.icon}</span>
                  <span className="contact-text">{s.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="contact-social-row">
            <a href="mailto:ishpreetsingh8386@gmail.com" className="contact-icon" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/techHunting-Pegasus" target="_blank" rel="noopener" className="contact-icon" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ishpreet-singh-598726219/" target="_blank" rel="noopener" className="contact-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="tel:+917590809375" className="contact-icon" aria-label="Phone"><FaPhone /></a>
          </div>
        </div>
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <h3>Send a Message</h3>
          
          <div className="form-field">
            <input 
              name="name" 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={errors.name ? 'error' : ''}
              autoComplete="off" 
            />
            {errors.name && (
              <div className="error-message">
                <FaExclamationTriangle size={12} />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          <div className="form-field">
            <input 
              name="email" 
              type="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={errors.email ? 'error' : ''}
              autoComplete="off" 
            />
            {errors.email && (
              <div className="error-message">
                <FaExclamationTriangle size={12} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="form-field">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5} 
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={errors.message ? 'error' : ''}
            />
            {errors.message && (
              <div className="error-message">
                <FaExclamationTriangle size={12} />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          <button type="submit" disabled={loading} className="contact-send-btn">
            {loading ? 'Sending...' : <><FaPaperPlane style={{ marginRight: 8 }} />Send</>}
          </button>
          
          {sent && <div className="contact-success">Thank you! Your message has been sent.</div>}
        </form>
      </div>
      <div className="contact-footer">
        <span>© {new Date().getFullYear()} techhunting. All rights reserved.</span>
      </div>
      <style>{`
        .contact-logo-row {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3rem 0 2rem 0;
        }
        .company-logo {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .company-logo-image {
          border-radius: 4px;



          padding: 0.5rem;
          transition: transform 0.3s ease;
        }
        .company-logo-image:hover {
          transform: scale(1.05);
          border-color: var(--color-accent-gold);
        }
        .logo-text {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-accent-navy);
          letter-spacing: 2px;
        }
        .contact-main {
          display: flex;
          gap: 4rem;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem 2rem 3rem 2rem;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-info {
          min-width: 300px;
          flex: 1;
          max-width: 450px;
        }
        .contact-info h2 {
          margin-bottom: 2rem;
          text-align: left;
          font-size: 2.2rem;
          color: var(--color-accent-navy);
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
        }
        .contact-list li {
          margin-bottom: 1.5rem;
        }
        .contact-social {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--color-text-primary);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.75rem;
          border-radius: 0;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .contact-social:hover, .contact-social:focus {
          color: var(--color-accent-navy);
          background: var(--color-paper);
          border: 1px solid var(--color-border);
          box-shadow: 0 2px 8px var(--color-shadow);
        }
        .contact-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          color: var(--color-accent-navy);
          flex-shrink: 0;
        }
        .contact-text {
          line-height: 1.5;
          word-break: break-word;
        }
        .contact-social-row {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
          justify-content: flex-start;
        }
        .contact-icon {
          font-size: 1.4rem;
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
        .contact-icon:hover, .contact-icon:focus {
          color: white;
          background: var(--color-accent-navy);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--color-shadow-dark);
          border-color: var(--color-accent-navy);
        }
        .contact-form {
          background: var(--color-paper);
          border: 2px solid var(--color-border);
          border-radius: 0;
          box-shadow: 0 4px 16px var(--color-shadow);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          min-width: 350px;
          max-width: 450px;
          gap: 1.5rem;
          flex: 1;
        }
        .contact-form h3 {
          margin: 0 0 1rem 0;
          color: var(--color-accent-navy);
          font-size: 1.6rem;
          font-weight: 600;
          text-align: left;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-form input, .contact-form textarea {
          border: 1px solid var(--color-border);
          border-radius: 0;
          padding: 1rem;
          font-size: 1rem;
          font-family: 'Georgia', 'Times New Roman', serif;
          outline: none;
          transition: all 0.3s ease;
          background: var(--color-paper);
        }
        .contact-form input.error, .contact-form textarea.error {
          border: 1px solid #8b2635;
          box-shadow: 0 0 0 2px rgba(139, 38, 53, 0.1);
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border: 1px solid var(--color-accent-navy);
          box-shadow: 0 0 0 2px rgba(0, 51, 102, 0.1);
        }
        .contact-form input.error:focus, .contact-form textarea.error:focus {
          border: 1px solid #8b2635;
          box-shadow: 0 0 0 2px rgba(139, 38, 53, 0.1);
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder {
          color: var(--color-text-muted);
          opacity: 0.7;
        }
        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #8b2635;
          font-size: 0.875rem;
          font-weight: 500;
          margin-top: 0.25rem;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .error-message svg {
          flex-shrink: 0;
        }
        .contact-send-btn {
          background: var(--color-accent-navy);
          color: white;
          border: 2px solid var(--color-accent-navy);
          border-radius: 0;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 16px var(--color-shadow);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Georgia', 'Times New Roman', serif;
          letter-spacing: 0.5px;
        }
        .contact-send-btn:hover, .contact-send-btn:focus {
          background: transparent;
          color: var(--color-accent-navy);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--color-shadow-dark);
        }
        .contact-send-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .contact-success {
          color: #2d5a2d;
          font-weight: 600;
          margin-top: 0.5rem;
          text-align: center;
          padding: 1rem;
          background: rgba(45, 90, 45, 0.1);
          border-radius: 0;
          border: 1px solid rgba(45, 90, 45, 0.2);
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .contact-footer {
          text-align: center;
          padding: 2rem 0;
          color: var(--color-text-muted);
          font-size: 1rem;
          border-top: 1px solid var(--color-border);
          margin-top: 2rem;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        @media (max-width: 900px) {
          .contact-main {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
          }
          .contact-info {
            min-width: 0;
            width: 100%;
            max-width: 500px;
          }
          .contact-form {
            min-width: 0;
            width: 100%;
            max-width: 500px;
          }
        }
        @media (max-width: 600px) {
          .contact-main {
            padding: 1.5rem 1rem 2rem 1rem;
            gap: 2.5rem;
          }
          .contact-form {
            padding: 2rem;
            gap: 1.25rem;
          }
          .contact-info h2 {
            font-size: 2rem;
          }
          .contact-social-row {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
} 
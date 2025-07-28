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
    <footer id="contact" style={{ width: '100%', background: 'var(--color-off-white)', marginTop: '4rem', borderTop: '1.5px solid #e6ecfa' }}>
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
          padding: 2.5rem 0 1.2rem 0;
        }
        .company-logo {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        .company-logo-image {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(35, 70, 160, 0.15);
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem;
          transition: transform 0.3s ease;
        }
        .company-logo-image:hover {
          transform: scale(1.05);
        }
        .logo-text {
          font-size: 2.1rem;
          font-weight: 800;
          background: linear-gradient(90deg, #2346a0 60%, #0d1b3f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1.5px;
        }
        .contact-main {
          display: flex;
          gap: 3rem;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem 1rem 2.5rem 1rem;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-info {
          min-width: 280px;
          flex: 1;
          max-width: 400px;
        }
        .contact-info h2 {
          margin-bottom: 1.5rem;
          text-align: left;
          font-size: 2rem;
          color: var(--color-royal-blue);
        }
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        .contact-list li {
          margin-bottom: 1rem;
        }
        .contact-social {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text-primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
        .contact-social:hover, .contact-social:focus {
          color: var(--color-royal-blue);
          background: rgba(35, 70, 160, 0.05);
        }
        .contact-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: var(--color-royal-blue);
          flex-shrink: 0;
        }
        .contact-text {
          line-height: 1.4;
          word-break: break-word;
        }
        .contact-social-row {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: flex-start;
        }
        .contact-icon {
          font-size: 1.5rem;
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
        .contact-icon:hover, .contact-icon:focus {
          color: white;
          background: var(--color-royal-blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(35, 70, 160, 0.2);
        }
        .contact-form {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(35, 70, 160, 0.08);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          min-width: 320px;
          max-width: 400px;
          gap: 1.25rem;
          flex: 1;
          border: 1px solid rgba(35, 70, 160, 0.1);
        }
        .contact-form h3 {
          margin: 0 0 0.5rem 0;
          color: var(--color-royal-blue);
          font-size: 1.4rem;
          font-weight: 600;
          text-align: left;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-form input, .contact-form textarea {
          border: 1.5px solid rgba(35, 70, 160, 0.1);
          border-radius: 0.75rem;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          font-family: inherit;
          outline: none;
          transition: all 0.3s ease;
          background: white;
        }
        .contact-form input.error, .contact-form textarea.error {
          border: 1.5px solid #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border: 1.5px solid var(--color-royal-blue);
          box-shadow: 0 0 0 3px rgba(35, 70, 160, 0.1);
        }
        .contact-form input.error:focus, .contact-form textarea.error:focus {
          border: 1.5px solid #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        .contact-form input::placeholder, .contact-form textarea::placeholder {
          color: var(--color-text-secondary);
          opacity: 0.7;
        }
        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e74c3c;
          font-size: 0.875rem;
          font-weight: 500;
          margin-top: 0.25rem;
        }
        .error-message svg {
          flex-shrink: 0;
        }
        .contact-send-btn {
          background: linear-gradient(135deg, var(--color-royal-blue) 0%, var(--color-accent) 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(35, 70, 160, 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .contact-send-btn:hover, .contact-send-btn:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(35, 70, 160, 0.3);
        }
        .contact-send-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .contact-success {
          color: #27ae60;
          font-weight: 600;
          margin-top: 0.5rem;
          text-align: center;
          padding: 0.75rem;
          background: rgba(39, 174, 96, 0.1);
          border-radius: 0.5rem;
          border: 1px solid rgba(39, 174, 96, 0.2);
        }
        .contact-footer {
          text-align: center;
          padding: 1.5rem 0;
          color: var(--color-text-secondary);
          font-size: 1rem;
          border-top: 1px solid rgba(35, 70, 160, 0.1);
          margin-top: 2rem;
        }
        @media (max-width: 900px) {
          .contact-main {
            flex-direction: column;
            gap: 2.5rem;
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
            gap: 2rem;
          }
          .contact-form {
            padding: 1.5rem;
            gap: 1rem;
          }
          .contact-info h2 {
            font-size: 1.8rem;
          }
          .contact-social-row {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
} 
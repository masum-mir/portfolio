import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Header Section */}
        <div className="contact-header">
          <div className="header-icon">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm available on almost every social media. You can message me, I
            will reply within 24 hours.
          </p>

          <div className="header-divider"></div>
        </div>

        {/* Main Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>

            {/* Phone Card */}
            <a href="tel:+8801782448900" className="contact-card phone-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="card-content">
                <h3 className="card-label">Phone</h3>
                <p className="card-value">+880 178 244 8900</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:masummir773@gmail.com"
              className="contact-card email-card"
            >
              <div className="card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="card-content">
                <h3 className="card-label">Email</h3>
                <p className="card-value">masummir773@gmail.com</p>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card location-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="card-content">
                <h3 className="card-label">Location</h3>
                <p className="card-value">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="social-section">
              <h3 className="social-title">Connect with me</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/md-masum-mir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/masum-mir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
                {/* <a
                  href="https://twitter.com/masum-mir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link twitter"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  <span>Twitter</span>
                </a> */}
                <a
                  href="https://www.facebook.com/md.masum.rr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="contact-image-section">
            <div className="image-card">
              <div className="image-wrapper">
                <img
                  src={require("../../assets/img/myimg.jpg")}
                  alt="Masum"
                  className="profile-img"
                />
                <div className="image-decoration"></div>
              </div>
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Let's create something amazing together!
            </h2>
            <p className="cta-text">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="cta-buttons">
              <a
                href="https://github.com/masum-mir/my-portfolio/blob/main/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </a>
              <a href="/skills" className="cta-btn secondary">
                <span>View My Work</span>
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

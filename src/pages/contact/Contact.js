import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Contact.scss";

const Contact = () => (
  <main className="contact-container">
    <div className="contact-content">
      <header className="contact-intro">
        <span className="page-eyebrow">Contact</span>
        <p>
          I’m open to opportunities in software engineering, machine learning,
          and deep learning, as well as research collaborations related to IoT,
          networking, and intelligent systems.
        </p>
      </header>

      <div className="contact-grid">
        <section
          className="contact-info-section"
          aria-labelledby="contact-info-title"
        >
          <div className="contact-section-heading">
            <span className="section-kicker">Get in Touch</span>

            <h2 id="contact-info-title">Contact Information</h2>
          </div>

          <a href="mailto:masummir773@gmail.com" className="contact-card">
            <span className="card-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>

            <span className="card-content">
              <small>Email</small>
              <strong>masummir773@gmail.com</strong>
            </span>

            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a href="tel:+8801782448900" className="contact-card">
            <span className="card-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>

            <span className="card-content">
              <small>Phone</small>
              <strong>+880 178 244 8900</strong>
            </span>

            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="contact-card static-card">
            <span className="card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>

            <span className="card-content">
              <small>Location</small>
              <strong>Dhaka, Bangladesh</strong>
            </span>
          </div>

          <div className="social-section">
            <span>Professional Profiles</span>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/md-masum-mir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>

              <a
                href="https://github.com/masum-mir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>

              <a
                href="https://www.facebook.com/md.masum.rr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>
            </div>
          </div>
        </section>

        <aside
          className="contact-profile-card"
          aria-label="Professional availability"
        >
          <div className="contact-photo-wrap">
            <img
              src={require("../../assets/img/myimg.jpg")}
              alt="Md Masum Mir"
            />
          </div>

          <div className="availability-row">
            <span className="availability-dot" aria-hidden="true" />

            <strong>Available for relevant opportunities</strong>
          </div>

          <p>
            Interested in software engineering, backend and full-stack
            development, machine learning, deep learning, and research involving
            IoT and networked systems.
          </p>

          <a className="email-cta" href="mailto:masummir773@gmail.com">
            Send an Email
          </a>
        </aside>
      </div>
    </div>
  </main>
);

export default Contact;

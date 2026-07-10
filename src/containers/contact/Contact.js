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

     
      </div>
    </div>
  );
};

export default Contact;

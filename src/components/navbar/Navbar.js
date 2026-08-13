import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHouse,
  faGraduationCap,
  faBriefcase,
  faDiagramProject,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const navItems = [
  { path: "/", label: "Home", icon: faHouse },
  { path: "/experience", label: "Experience & Research", icon: faBriefcase },
  { path: "/projects", label: "Projects", icon: faDiagramProject },
  { path: "/education", label: "Education", icon: faGraduationCap },
  { path: "/contact", label: "Contact", icon: faEnvelope },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && showNav) {
        setShowNav(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setShowNav(false);
    };

    document.body.style.overflow = showNav ? "hidden" : "";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNav]);

  const closeNav = () => setShowNav(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/" onClick={closeNav} aria-label="Masum portfolio home">
          <span className="logo-icon">M</span>
          <span className="logo-copy">
            <strong>Masum</strong> 
          </span>
        </NavLink>

        <nav className="nav-menu desktop-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  onClick={closeNav}
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="resume-link desktop-resume"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileArrowDown} /> Resume
        </a>

        <button
          className={`mobile-menu-toggle ${showNav ? "active" : ""}`}
          onClick={() => setShowNav((value) => !value)}
          aria-label={showNav ? "Close navigation" : "Open navigation"}
          aria-expanded={showNav}
          aria-controls="mobile-navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${showNav ? "active" : ""}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span>Navigation</span>
            <button onClick={closeNav} aria-label="Close navigation">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
                  onClick={closeNav}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            className="resume-link mobile-resume"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileArrowDown} /> View Resume
          </a>
        </div>
      </div>

      {showNav && <button className="mobile-overlay" onClick={closeNav} aria-label="Close navigation overlay" />}
    </header>
  );
};

export default Navbar;

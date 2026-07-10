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
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && showNav) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);

  const closeNav = () => {
    setShowNav(false);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navItems = [
    { path: "/home", label: "Home", icon: faHouse },
    { path: "/education", label: "Education", icon: faGraduationCap },
    { path: "/experience", label: "Experience", icon: faBriefcase },
    { path: "/projects", label: "Projects", icon: faDiagramProject },
    { path: "/contact", label: "Contact", icon: faEnvelope },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/" onClick={closeNav}>
          <div className="logo-wrapper">
            <span className="logo-icon">M</span>
            <span className="logo-text">asum</span>
          </div>
        </NavLink>

        <nav className="nav-menu desktop-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeNav}
                >
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`mobile-menu-toggle ${showNav ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-nav ${showNav ? "active" : ""}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Navigation</span>
            <button
              className="mobile-close-btn"
              onClick={closeNav}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "mobile-nav-link active" : "mobile-nav-link"
                  }
                  onClick={closeNav}
                >
                  <div className="mobile-link-content">
                    <FontAwesomeIcon icon={item.icon} className="mobile-icon" />
                    <span>{item.label}</span>
                  </div>
                  <svg
                    className="mobile-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showNav && <div className="mobile-overlay" onClick={closeNav}></div>}
    </header>
  );
};

export default Navbar;
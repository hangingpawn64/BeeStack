import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="BeeStack logo" />
      </div>
      <div className="navname">BeeStack</div>

      {/* Desktop Navigation */}
      <div className="nav-items desktop-nav">
        <div className={`nav-item ${isActive("/") ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <div className={`underline ${isActive("/") ? "show" : ""}`}></div>
        </div>
        <div className={`nav-item ${isActive("/our-work") ? "active" : ""}`}>
          <Link to="/our-work">Our Work</Link>
          <div className={`underline ${isActive("/our-work") ? "show" : ""}`}></div>
        </div>
        <div className={`nav-item ${isActive("/about-us") ? "active" : ""}`}>
          <Link to="/about-us">About Us</Link>
          <div className={`underline ${isActive("/about-us") ? "show" : ""}`}></div>
        </div>
        <div className={`nav-item ${isActive("/careers") ? "active" : ""}`}>
          <Link to="/careers">Careers</Link>
          <div className={`underline ${isActive("/careers") ? "show" : ""}`}></div>
        </div>
        <div className={`nav-item ${isActive("/contact-us") ? "active" : ""}`}>
          <Link to="/contact-us">Contact Us</Link>
          <div className={`underline ${isActive("/contact-us") ? "show" : ""}`}></div>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-menu">
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-nav-items ${isMenuOpen ? "show" : ""}`}>
          <div>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </div>
          <div>
            <Link to="/our-work" onClick={() => setIsMenuOpen(false)}>Our Work</Link>
          </div>
          <div>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </div>
          <div>
            <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
          </div>
          <div className="aboutus">
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <div className="underline border-3 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
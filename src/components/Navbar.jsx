import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
      <img src="/logo.png"/>
      </div>
      <div className="navname">BeeStack</div>
      
      {/* Desktop Navigation */}
      <div className="nav-items desktop-nav">
        <div>
          <a href="">Home</a>
          <div className="underline 2"></div>
        </div>
        <div>
          <a href="">Our Work</a>
        </div>
        <div>
          <a href="">About Us</a>
        </div>
        <div>
          <a href="">Careers</a>
        </div>
        <div className="aboutus">
          <a href="">Contact Us</a>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-menu">
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`mobile-nav-items ${isMenuOpen ? 'show' : ''}`}>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>Home</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>Our Work</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>About Us</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>Careers</a>
          </div>
          <div className="aboutus">
            <a href="" onClick={() => setIsMenuOpen(false)}>COntact Us</a>
            <div className="underline border-3 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
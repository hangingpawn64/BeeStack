import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo"></div>
      
      {/* Desktop Navigation */}
      <div className="nav-items desktop-nav">
        <div>
          <a href="">HOME</a>
          <div className="underline border-3 border-white"></div>
        </div>
        <div>
          <a href="">PARTICIPANTS</a>
        </div>
        <div>
          <a href="">PROJECTS</a>
        </div>
        <div>
          <a href="">ACHIEVEMENTS</a>
        </div>
        <div className="aboutus">
          <a href="">ABOUT US</a>
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
            <a href="" onClick={() => setIsMenuOpen(false)}>HOME</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>PARTICIPANTS</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          </div>
          <div>
            <a href="" onClick={() => setIsMenuOpen(false)}>ACHIEVEMENTS</a>
          </div>
          <div className="aboutus">
            <a href="" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            <div className="underline border-3 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
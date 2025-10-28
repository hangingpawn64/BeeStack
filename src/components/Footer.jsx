import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-left">
    Copyright © 2025 BeeStack. All Rights Reserved.
  </div>

  <div className="footer-links">
    <a href="#contact">Contact</a>
    <a href="#legal">Legal</a>
    <a href="#sitemap">Sitemap</a>
  </div>

  <div className="footer-social">
    <span>Follow the vibe?</span>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon linkedin"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</footer>

  )
}

export default Footer
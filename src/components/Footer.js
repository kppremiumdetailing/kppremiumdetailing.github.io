import React from 'react';
import '../styles/Footer.css';
import { SiInstagram, SiTiktok } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/kppremiumdetailing/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@kppremiumdetailing/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiTiktok />
        </a>        
      </div>
      <p className="kp-footer">&copy; {new Date().getFullYear()} KP Premium Detailing. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

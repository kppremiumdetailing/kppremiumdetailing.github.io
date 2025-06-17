import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Add social media logos</p>
      <p>&copy; {new Date().getFullYear()} KP Premium Detailing. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

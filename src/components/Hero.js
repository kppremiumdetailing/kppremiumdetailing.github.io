import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">KP Premium Detailing</h1>
      <h3>Queens and Long Island</h3>
      <p></p>
      <Link to="/contact" className="btn">Contact Us</Link>
    </section>
  );
}

export default Hero;

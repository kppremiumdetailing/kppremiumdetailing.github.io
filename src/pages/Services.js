import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services">
      <h3>Our Services</h3>
      <div className="service-list">
        <div className="service-card">
          <h4>Service 1</h4>
          <p>Description</p>
        </div>
        <div className="service-card">
          <h4>Service 2</h4>
          <p>Description</p>
        </div>
        <div className="service-card">
          <h4>Service 3</h4>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

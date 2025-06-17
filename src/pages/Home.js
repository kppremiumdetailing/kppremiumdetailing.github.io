import React from 'react';
import Hero from '../components/Hero';
// import Services from '../components/Services';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <div>
      <Hero />
      <section className="services" id="services">
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
      <Reviews />
    </div>
  );
}

export default Home;

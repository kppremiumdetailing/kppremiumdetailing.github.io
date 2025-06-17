import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

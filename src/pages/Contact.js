import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h3>Contact Us</h3>
      <p>Add phone number</p>
      <p>Add link so when someone clicks it'll open a text message with the phone number</p>
      <p>Add social media</p>

      <p>Email?</p>
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

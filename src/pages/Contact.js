import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h3>Contact Us</h3>
      <p>
        ☎️ Text or Call{' '}
        <a href="sms:7187474487" className="contact-link">
          (718) 747-4487
        </a>
      </p>
      <p>Add social media</p>

      {/* <p>Email?</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form> */}
    </section>
  );
}

export default Contact;

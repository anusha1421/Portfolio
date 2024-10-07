import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; // Import the CSS file
import mapImage from '../assets/11.jpg'; // Update with your static map image path

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uyl521k', 'template_686bpv8', form.current, {
        publicKey: 'MFrKvZdH8NHGkXFTN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!'); // Alert after success
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.'); // Alert on failure
        },
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>

      <div className="map-section">
        <div className="info-box">
          Anusha S J,
          <br />
          behind mini vidhana soudha , srinagar 2nd main <br />
          Arsikere , 573103 <br />
          <br />
          <span>Anushasj456@gmail.com</span>
        </div>
        <div className="map-wrap">
          <img src={mapImage} alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

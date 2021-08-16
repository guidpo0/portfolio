import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const contactPage = document.querySelector('.contact-page-container');
    navBarOpened && contactPage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <div className="contact-page-container">
      Contact
    </div>
  );
}

export default Contact;

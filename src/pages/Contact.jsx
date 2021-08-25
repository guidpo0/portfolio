import React, { useEffect } from 'react';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const contactPage = document.querySelector('.contact-page-container');
    navBarOpened && contactPage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <>
      <Header />
      <main className="contact-page-container">
        <h1>Contato</h1>
        <form
          action="https://formsubmit.co/guilhermepdo1508@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://guidpo0.github.io/portfolio" />
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <input type="text" name="_subject" placeholder="Assunto" required />
          <textarea name="message" placeholder="Mensagem" required />
          <button type="submit">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Contact;

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

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
        <h3>Você pode me contatar diretamente pelo Linkedin ou pode preencher o formulário abaixo que responderei via e-mail:</h3>
        <form
          action="https://formsubmit.co/guilhermepdo1508@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <label htmlFor="name" className="contact-form-label">
            Nome *
            <input id="name" type="text" name="name" required />
          </label>
          <label htmlFor="email" className="contact-form-label">
            Email *
            <input id="email" type="email" name="email" required />
          </label>
          <label htmlFor="subject" className="contact-form-label">
            Assunto *
            <input id="subject" type="text" name="_subject" required />
          </label>
          <label htmlFor="message" className="contact-form-label">
            Mensagem *
            <textarea id="message" name="message" required />
          </label>
          <button
            type="submit"
            className="contact-form-button"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Contact;

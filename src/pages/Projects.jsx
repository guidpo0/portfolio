import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
  return (
    <>
      <div>
        <Header />
        <h1>Meus projetos:</h1>
        <ul>
          <a
            href="http://guidpo0.github.io/trybewallet"
            rel="noreferrer"
            target="_blank"
          >
            Trybewallet
          </a>
          <a
            href="http://guidpo0.github.io/frontend-online-store"
            rel="noreferrer"
            target="_blank"
          >
            FrontEnd Online Store
          </a>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Projects;

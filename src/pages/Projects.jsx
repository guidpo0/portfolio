import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Projects.css';
import receitas from '../images/projects/receitas.png';

function Projects() {
  return (
    <>
      <Header />
      <main className="projects-page-container">
        <h1>Meus projetos</h1>
        <h3>Projetos em Front-End:</h3>
        <div className="projects">
          <a
            href="http://guidpo0.github.io/receitas"
            rel="noreferrer"
            target="_blank"
            className="frontend-project"
          >
            <div className="frontend-image-container">
              <img src={receitas} alt="prototipo projeto app de receitas" />
            </div>
            <h5>App de Receitas</h5>
          </a>
        </div>     
      </main>
      <Footer />
    </>
  );
}

export default Projects;

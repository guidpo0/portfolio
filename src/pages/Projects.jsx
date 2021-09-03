import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Projects.css';
import projectsInfo from '../helpers/projectsInfo';

function Projects() {
  return (
    <>
      <Header />
      <main className="projects-page-container">
        <h1>Meus projetos</h1>
        <h3>Projetos em Front-End:</h3>
        <div className="projects">
          {
            projectsInfo.map(({ link, thumb, alt, title, description, style }) => (
              <a
                href={ link }
                rel="noreferrer"
                target="_blank"
                className="frontend-project"
              >
                <div className="frontend-image-container">
                  <img src={ thumb } alt={ alt } />
                </div>
                <h5>{ title }</h5>
                <div className="frontend-description">
                  <p>
                    { description }
                    <br />
                    <br />
                    { style }
                  </p>
                </div>
              </a>
            ))
          }
        </div>     
      </main>
      <Footer />
    </>
  );
}

export default Projects;

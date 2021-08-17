import React, { useEffect } from 'react';
import './Projects.css';

function Projects() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const projectsPage = document.querySelector('.projects-page-container');
    navBarOpened && projectsPage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <div className="projects-page-container">
      <main>
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
      </main>
    </div>
  );
}

export default Projects;

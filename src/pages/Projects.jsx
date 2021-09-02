import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Projects.css';
import receitas from '../images/projects/receitas.png';
import planetas from '../images/projects/planetas-starwars.jpeg';
import pixel from '../images/projects/pixel.jpeg';
import todo from '../images/projects/todo.jpeg';

function Projects() {
  return (
    <>
      <Header />
      <main className="projects-page-container">
        <h1>Meus projetos</h1>
        <h3>Projetos em Front-End:</h3>
        <div className="projects">
          <a
            href="https://guidpo0.github.io/receitas"
            rel="noreferrer"
            target="_blank"
            className="frontend-project"
          >
            <div className="frontend-image-container">
              <img src={receitas} alt="prototipo projeto app de receitas" />
            </div>
            <h5>App de Receitas</h5>
            <div className="frontend-description">
              <p>
                App de receitas onde é possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!
                <br />
                <br />
                Estilizado para mobile e desktop
              </p>
            </div>
          </a>
          <a
            href="https://guidpo0.github.io/planetas-starwars/"
            rel="noreferrer"
            target="_blank"
            className="frontend-project"
          >
            <div className="frontend-image-container">
              <img src={planetas} alt="prototipo projeto planetas starwars" />
            </div>
            <h5>Planetas Starwars</h5>
            <div className="frontend-description">
              <p>
                Essa aplicação dá ao usuário acesso a uma lista de planetas com a opção de realizar filtros nesta lista para procurar por planetas específicos.
                <br />
                <br />
                Estilizado para mobile e desktop
              </p>
            </div>
          </a>
          <a
            href="https://guidpo0.github.io/lista-de-tarefas/"
            rel="noreferrer"
            target="_blank"
            className="frontend-project"
          >
            <div className="frontend-image-container">
              <img src={todo} alt="prototipo projeto planetas starwars" />
            </div>
            <h5>Arte em Pixels</h5>
            <div className="frontend-description">
              <p>
                Esta aplicação permite ao usuário anotar tarefas e manipulá-las.
                <br />
                <br />
                Estilizado para mobile e desktop
              </p>
            </div>
          </a>
          <a
            href="https://guidpo0.github.io/arte-em-pixels/"
            rel="noreferrer"
            target="_blank"
            className="frontend-project"
          >
            <div className="frontend-image-container">
              <img src={pixel} alt="prototipo projeto planetas starwars" />
            </div>
            <h5>Arte em Pixels</h5>
            <div className="frontend-description">
              <p>
                Esta aplicação busca permitir ao usuário trabalhar sua criatividade por meio de uma paleta de cores.
                <br />
                <br />
                Estilizado para mobile e desktop
              </p>
            </div>
          </a>
        </div>     
      </main>
      <Footer />
    </>
  );
}

export default Projects;

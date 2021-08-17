import React, { useEffect } from 'react';
import './About.css';
import aboutPicture from '../images/aboutPicture.jpg';

function About() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const aboutPage = document.querySelector('.about-page-container');
    navBarOpened && aboutPage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <div className="about-page-container">
      <main>
        <h1>Sobre mim</h1>
        <div className="about-picture-container">
          <img src={ aboutPicture } alt="Foto na praia" className="about-picture" />
        </div>
        <h2>Prazer!</h2>
        <h2>Sou o Guilherme</h2>
        <h3>Paulista, de 96, apaixonado por viagens e aspirante a jogador de basquete.</h3>
        <h4>Tenho como pilar minha família e carrego como valores a honestidade e o respeito ao próximo.</h4>
        <h6>Minha jornada em tecnologia se iniciou em 2021 com o descontentamento com os métodos de ensino tradicionais, pelos quais estava buscando ingressar no mesmo mercado.</h6>
        <h6>Foi quando decidi me aventurar com métodos pouco experimentados no Brasil e iniciei minha jornada rumo ao conhecimento em desenvolvimento web full stack.</h6>
        <h6>No momento já conclui o módulo de Front End na Trybe, empresa que escolhi para me apontar o caminho nessa jornada, e hoje estou estudando o Back End.</h6>
      </main>
    </div>
  );
}

export default About;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const homePage = document.querySelector('.home-page-container');
    navBarOpened && homePage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <>
      <div className="home-page-container">
        <main>
          <h1>Hey, olá!</h1>
          <h2>Eu sou o Guilherme, atualmente sou Desenvolvedor Júnior em FrontEnd</h2>
          <h3>Fique a vontade e explore, assim você pode conhecer um pouco sobre mim e sobre meu caminho até aqui.</h3>
          <Link to="/projects">
            <button type="button">MEUS PROJETOS</button>
          </Link>
        </main>
      </div>
    </>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="home-page-container">
        <Header />
        <main>
          <h1>Hey, olá!</h1>
          <h2>Eu sou o Guilherme, atualmente sou Desenvolvedor Júnior em FrontEnd</h2>
          <h3>Fique a vontade e explore, assim você pode conhecer um pouco sobre mim e sobre meu caminho até aqui.</h3>
          <Link to="/projects">
            <button type="button">MEUS PROJETOS</button>
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
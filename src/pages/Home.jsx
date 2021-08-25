import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main className="home-page-container">
        <h1>Hey, olá!</h1>
        <h2>Eu sou o Guilherme, atualmente sou Desenvolvedor Júnior em FrontEnd</h2>
        <h3>Fique a vontade e explore, assim você pode conhecer um pouco sobre mim e sobre meu caminho até aqui.</h3>
        <Link to="/projects">
          <button type="button">MEUS PROJETOS</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Home;
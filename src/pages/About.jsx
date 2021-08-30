import React from 'react';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import skillCss from '../images/skillCss.png';
import skillGit from '../images/skillGit.png';
import skillHtml from '../images/skillHtml.png';
import skillJs from '../images/skillJs.png';
import skillReact from '../images/skillReact.png';
import skillRedux from '../images/skillRedux.png';

function About() {
  const softSkills = [
    'Inteligência Emocional',
    'Empatia',
    'Escuta Ativa',
    'Assertividade',
    'Colaboração',
    'Comunicação',
    'Pensamento Crítico',
  ];
  const hardSkills = [
    { skill: 'CSS', thumb: skillCss },
    { skill: 'Git', thumb: skillGit },
    { skill: 'HTML', thumb: skillHtml },
    { skill: 'JS', thumb: skillJs },
    { skill: 'React', thumb: skillReact },
    { skill: 'Redux', thumb: skillRedux },
  ];

  return (
    <>
      <Header />
      <main className="about-page-container">
        <h1>Sobre mim</h1>
        <h2>Prazer!</h2>
        <h2>Sou o Guilherme</h2>
        <h3>Paulista, de 96, apaixonado por viagens e aspirante a jogador de basquete.</h3>
        <h4>Tenho como pilar minha família e carrego como valores a honestidade e o respeito ao próximo.</h4>
        <h5>Minha jornada em tecnologia se iniciou em 2021 com o descontentamento com os métodos de ensino tradicionais, pelos quais estava buscando ingressar no mesmo mercado.</h5>
        <h5>Foi quando decidi me aventurar com métodos pouco experimentados no Brasil e iniciei minha jornada rumo ao conhecimento em desenvolvimento web full stack.</h5>
        <h5>No momento já conclui o módulo de Front End na Trybe, empresa que escolhi para me apontar o caminho nessa jornada, e hoje estou estudando o Back End.</h5>
        <div>
          <h2 >Habilidades</h2>
          <h3>Soft Skills</h3>
          <ul>
            { softSkills.map((skill) => <li>{ skill }</li>)}
          </ul>
          <h3>Hard Skills</h3>
          <div className="hard-skills">
          {
            hardSkills.map(({ skill, thumb }, index) => (
              <div key={ index }>
                <img
                  src={ thumb }
                  alt="hard-skills logo"
                  className={ `hard-skill-${index} hard-skill` }
                />
                <h4>{ skill }</h4>
              </div>
            ))
          }            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;

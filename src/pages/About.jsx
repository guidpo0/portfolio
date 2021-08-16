import React, { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    const navBarOpened = document.querySelector('.navbar-opened');
    const aboutPage = document.querySelector('.about-page-container');
    navBarOpened && aboutPage.classList.add('navbar-opened-sibling');
  }, []);

  return (
    <div className="about-page-container">
      About
    </div>
  );
}

export default About;

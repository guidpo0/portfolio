import React from 'react';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gui-pereira/">
          <p>
            <img className="linkedin" src={ linkedinLogo } alt="Logo do linkedin" />
          </p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/guidpo0">
          <p>
            <img className="github" src={ githubLogo } alt="Logo do github" />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function openNavbar() {
    const toggleColapsed = document.querySelector('.toggle-colapsed-bar');
    const navbarParent = document.querySelector('.navbar-container').parentNode;
    if (!isNavbarOpen) {
      toggleColapsed.classList.add('navbar-opened');
      navbarParent.classList.add('navbar-opened-parent');
    }
    if (isNavbarOpen) {
      toggleColapsed.classList.remove('navbar-opened');
      navbarParent.classList.remove('navbar-opened-parent');
    }
    setIsNavbarOpen(!isNavbarOpen)    
  }

  return (
    <header className="navbar-container">
      <nav
        style={ isNavbarOpen? { height: '95px' } : { height: '0' } }
        className="colapsed-bar"
      >
        <div className="links-container">
          <Link to="/">
            <button type="button">HOME</button>
          </Link>
          <Link to="/about">
            <button type="button">SOBRE</button>
          </Link>
          <Link to="/projects">
            <button type="button">PROJETOS</button>
          </Link>
          <Link to="/contact">
            <button type="button">CONTATO</button>
          </Link>  
        </div>
      </nav>
      <button
        onClick={ openNavbar }
        type="button"
        className="toggle-colapsed-bar"
      >
        <span />
      </button>
    </header>
  );
}

export default Header;

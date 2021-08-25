import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import './Header.css';

function Header() {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(MainContext);

  useEffect(() => {
    const navbarSibling = document.querySelector('.navbar-container').nextSibling;
    if (isNavbarOpen) {
      navbarSibling.classList.add('navbar-opened-sibling');
    }
    if (!isNavbarOpen) {
      navbarSibling.classList.remove('navbar-opened-sibling');
    }
  }, [isNavbarOpen]);

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
        onClick={ () => setIsNavbarOpen(!isNavbarOpen) }
        type="button"
        className={
          isNavbarOpen
            ? 'toggle-colapsed-bar navbar-opened' : 'toggle-colapsed-bar'
        }
      >
        <span />
      </button>
    </header>
  );
}

export default Header;

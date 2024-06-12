import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import nav from '../images/nav.svg';

function Header() {
  return (
    <header className="navbar-container">
      <div className="profile">
        <img src={nav} alt="ícone de programação" />
        <span>Guilherme Pereira</span>
      </div>
      <nav className="navbar">
        <NavLink to="/" activeClassName="active" exact>
          <button type="button">home</button>
        </NavLink>
        <NavLink to="/about">
          <button type="button">sobre</button>
        </NavLink>
        <NavLink to="/projects">
          <button type="button">portfólio</button>
        </NavLink>
        <NavLink to="/contact">
          <button type="button">serviços</button>
        </NavLink>
        <NavLink to="/contact">
          <button type="button">resumo</button>
        </NavLink>
        <NavLink to="/contact">
          <button type="button">contato</button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">DSV</div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#nosotros">Nosotros</a></li>
          <li className="nav__item"><a href="#servicios">Servicios</a></li>
          <li className="nav__item"><a href="#consultas">Consultas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
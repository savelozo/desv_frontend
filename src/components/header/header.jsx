import React from 'react';
import './header.css';

const Header = ({scrollToAboutUs, scrollToContactForm}) => {

  return (
    <header className="header">
      <div className="header__brand">DSV</div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={scrollToAboutUs}><a href="#nosotros">Nosotros</a></li>
          <li className="nav__item" onClick={scrollToContactForm}><a href="#consultas">Consultas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
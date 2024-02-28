import React from 'react';
import './buttonHero.css';

const ButtonHero = ({ onButtonClick }) => {
  return (
      <button onClick={onButtonClick} className="hero-btn rounded p-2">
        Conoce tu riesgo
      </button>
  );
}

export default ButtonHero;

import React from 'react';
import ButtonHero from './components/buttonHero';
import './hero.css';

const Hero = ({ onButtonClick }) => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="video">
        <source src="https://video.wixstatic.com/video/11062b_0fcc5b5d1613468aad7802063185e9d1/1080p/mp4/file.mp4" type="video/mp4" />
        Tu navegador no soporta vídeos HTML5.
      </video>
      <div className="video-overlay"/>
      <div className="content">
        <h1>Evalúa tu riesgo financiero</h1>
        <p>Con DVS, obtén un diagnóstico personalizado de tu riesgo bancario, informate sobre productos financieros idóneos y recibe consejos para mejorar tu calificación financiera.</p>
        <ButtonHero onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default Hero;

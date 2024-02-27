import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3>Contacto</h3>
        <p><strong>Teléfono:</strong> +1 234 567 8900</p>
        <p><strong>Email:</strong> contacto@desv.com</p>
        <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País</p>
      </div>
      <div className="footer__social-media">
        <h3>Síguenos</h3>
        {/* Insertar aquí enlaces o íconos de redes sociales */}
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './infoSection.css';

const InfoSection = ({ title, content }) => {
  return (
    <section className="dvs-section bg-light-blue px-10 py-20">
      <div className="container mx-auto flex justify-between items-center p-10">
        <div className="dvs-graphics flex-1">
          {/* Aquí irían tus SVG o imágenes */}
        </div>
        <div className="dvs-text flex-1">
          <h2 className="text-title mb-4">Inteligente</h2>
          <p className="text-lg">
            Evaluar tu riesgo financiero nunca fue tan fácil. Con DVS, obtén un
            diagnóstico personalizado en minutos. Nuestra tecnología analiza tus datos
            financieros y te proporciona información valiosa para tomar decisiones informadas.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center p-10">
        <div className="dvs-text flex-1">
          <h2 className="text-title mb-4">Rápido</h2>
          <p className="text-lg">
          Con DVS, obtén un diagnóstico financiero personalizado en minutos. Ahorra tiempo y toma decisiones financieras informadas de manera rápida y fácil.
          </p>
        </div>
        <div className="dvs-graphics flex-1">
          {/* Aquí irían tus SVG o imágenes */}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

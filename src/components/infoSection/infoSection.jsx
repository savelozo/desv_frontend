import React from 'react';
import './infoSection.css';

const InfoSection = ({ title, content }) => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Columna izquierda con el texto y los círculos como índices */}
          <div className="flex-1 flex items-center">
            <div className="space-y-2">
              <h2 className="text-2xl text-gray-700 font-semibold">Cómo funciona DVS</h2>
              <p className="text-gray-600">Inteligente</p>
              <p className="text-sm text-gray-500">Evaluar tu riesgo financiero nunca fue tan fácil...</p>
            </div>
          </div>
          
          {/* Columna derecha con la imagen o el SVG */}
          <div className="flex-1">
            {/* Asumiendo que tienes un componente SVG llamado 'AnalyticsSVG' */}
            {/* <AnalyticsSVG className="w-full h-auto text-purple-600" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

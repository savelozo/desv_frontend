import React from 'react';
import './aboutUs.css';

const AboutUsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* Aquí podrías poner un título de sección si es necesario */}
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-3 md:gap-8">
            <li className='about-li'>
              <div className="flex flex-col items-center text-center px-8 about-li">
                <div className="flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path fill="rgb(114,9,183)" d="M149.8,80l37.8-37.8c8.3-8.3,8.3-21.9,0-30.3s-21.9-8.3-30.3,0l-37.8,37.8c-8.3,8.3-8.3,21.9,0,30.3 S141.4,88.3,149.8,80z"/>
                      <path fill="rgb(114,9,183)" d="M49.2,120l-37.8,37.8c-8.3,8.3-8.3,21.9,0,30.3s21.9,8.3,30.3,0l37.8-37.8c8.3-8.3,8.3-21.9,0-30.3 S57.6,111.7,49.2,120z"/>
                      <path fill="rgb(114,9,183)" d="M149.8,120c-8.3-8.3-21.9-8.3-30.3,0s-8.3,21.9,0,30.3l37.8,37.8c8.3,8.3,21.9,8.3,30.3,0s8.3-21.9,0-30.3 L149.8,120z"/>
                      <path fill="rgb(114,9,183)" d="M41.7,12c-8.3-8.3-21.9-8.3-30.3,0s-8.3,21.9,0,30.3L49.2,80c8.3,8.3,21.9,8.3,30.3,0s8.3-21.9,0-30.3L41.7,12 z"/>
                  </g>
                </svg>
                </div>
                <div className="mt-6 pb-2">
                  <h2 className="text-lg leading-6 font-medium">
                    Acerca de DVS
                  </h2>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    DVS es una plataforma web y móvil que te ayuda a evaluar tu riesgo financiero. Nuestra misión es ayudar a las personas a tomar decisiones financieras informadas. Con DVS, tendrás acceso a un diagnóstico financiero personalizado, productos financieros recomendados y consejos para mejorar tu calificación financiera.
                  </p>
                </div>
              </div>
            </li>
            <li className='about-li'>
              <div className="flex flex-col items-center text-center px-8">
                <div className="flex-shrink-0">
                  <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="rgb(114,9,183)" d="M 100 5.1 C 47.6 5.1 5.1 47.6 5.1 100 c 0 52.4 42.5 94.9 94.9 94.9 c 52.4 0 94.9 -42.5 94.9 -94.9 C 194.9 47.6 152.4 5.1 100 5.1 Z M 100 160.4 c -33.3 0 -60.4 -27 -60.4 -60.4 c 0 -33.3 27 -60.4 60.4 -60.4 c 33.3 0 60.4 27 60.4 60.4 C 160.4 133.3 133.3 160.4 100 160.4 Z" />
                  </svg>
                </div>
                <div className="mt-6 pb-2">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Nuestra misión
                  </h2>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Nuestra misión es ayudar a las personas a tomar decisiones financieras informadas con la ayuda de la tecnología. Queremos que nuestros usuarios estén informados sobre su situación financiera y puedan tomar decisiones bien fundamentadas.
                  </p>
                </div>
              </div>
            </li>
            <li className='about-li'>
              <div className="flex flex-col items-center text-center px-8">
                <div className="flex-shrink-0">
                  <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="rgb(114,9,183)" d="M 181.9 83 H 117 V 18.1 C 117 8.7 109.4 1 100 1 c -9.4 0 -17 7.7 -17 17.1 V 83 H 18.1 C 8.7 83 1 90.6 1 100 c 0 9.4 7.7 17 17.1 17 H 83 v 64.9 c 0 9.4 7.6 17.1 17 17.1 c 9.4 0 17 -7.7 17 -17.1 V 117 h 64.9 c 9.4 0 17.1 -7.6 17.1 -17 C 199 90.6 191.3 83 181.9 83 Z" />
                  </svg>
                </div>
                <div className="mt-6 pb-2">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Tecnología
                  </h2>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    En DVS, utilizamos tecnología de última generación para proporcionar diagnósticos financieros precisos y recomendaciones de productos financieros personalizados.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;


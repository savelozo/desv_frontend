import React from 'react';
import './contactForm.css'; // Asegúrate de tener este archivo CSS en tu proyecto

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 contactForm">
      <h2 className="text-2xl md:w-1/2 font-bold text-white mb-8">
        Para agendar una asesoría personalizada, o bien, si deseas analizar algo en específico,  ingresa tus datos de contacto.
      </h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2">
        <div className="mb-4 md:flex md:items-center">
          <div className="md:w-1/2 md:mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" />
          </div>
          <div className="md:w-1/2 md:ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apellido" type="text" placeholder="Apellido" />
          </div>
        </div>
        <div className="mb-4 md:flex md:items-center">
          <div className="md:w-1/2 md:mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="ejemplo@desv.cl" />
          </div>
          <div className="md:w-1/2 md:ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teléfono">
              N° de contacto
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="teléfono" type="text" placeholder="+569 48515692" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            ¡Contáctanos!
          </button>
        </div>
      </form>
    </div>
  );
};;

export default ContactForm;

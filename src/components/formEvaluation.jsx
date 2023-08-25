import React from 'react';
import EvaluameFormButton from './forms-components/evaluameButtonForm';

const EvaluameForm = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center lg:w-1/3">
      <div className="bg-white p-8 rounded shadow-md w-full min-w-full">
        <h2 className="text-2xl font-semibold mb-4">Evalúame</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-2">Nombres</label>
            <input type="text" id="firstName" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium mb-2">Apellidos</label>
            <input type="text" id="lastName" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Correo</label>
            <input type="email" id="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block font-medium mb-2">Fecha de Nacimiento</label>
            <input type="date" id="birthdate" className="w-full border rounded px-3 py-2" />
          </div>
          <EvaluameFormButton formData={{1:'hola'}} />
        </form>
      </div>
    </div>
  );
};

export default EvaluameForm;

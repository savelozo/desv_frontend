import React from 'react';
import occupations from '../data_load/ocupations';
import countries from '../data_load/countries';
import regions from '../data_load/regions';
import regions_commmunes from '../data_load/communes';
import './formEvaluation-style.css';
import StepIndicator from './indicators';

const PartOneForm = ({formData, handleFieldChange, goToNextPart}) => {

  return (
    <div className={`bg-gray-100`}>
    <div className={`bg-white p-8 rounded shadow-md min-w-[33vw] w-1/3 visible`}>
      <h2 className="text-2xl font-semibold mb-4">Evalúame: Paso 1/4</h2>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium mb-2">Nombres</label>
            <input 
              type="text" 
              id="firstName" 
              className="w-full border rounded px-3 py-2"
              value={formData.firstName}
              onChange={(e) => handleFieldChange("firstName", e.target.value)}             
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium mb-2">Apellidos</label>
            <input 
              type="text" 
              id="lastName" 
              className="w-full border rounded px-3 py-2"
              value={formData.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)} 
              />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">Correo</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block font-medium mb-2">Fecha de Nacimiento</label>
            <input 
              type="date" 
              id="birthdate" 
              className="w-full border rounded px-3 py-2"
              value={formData.birthdate}
              onChange={(e) => handleFieldChange("birthdate", e.target.value)}                 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="block font-medium mb-2">¿Tienes nacionalidad chilena?</label>
            <select 
              id="nationality" 
              className="w-full border rounded px-3 py-2"
              value={formData.nationality}
              onChange={(e) => handleFieldChange("nationality", e.target.value)}  
            >
            <option value="Sí">Sí</option>
            <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">              
              <label htmlFor="select country" className="block font-medium mb-2">Selecciona tu país de residencia:</label>
              <select 
                id="country"
                className="w-full border rounded px-3 py-2"
                onChange={(e) => handleFieldChange("country", e.target.value)} 
                >
                <option value="">Selecciona una opción</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
          </div>
          {(formData.country == "Chile") && (
            <div className="mb-4">              
              <label htmlFor="select region" className="block font-medium mb-2">Selecciona tu región de residencia:</label>
              <select 
                id="region"
                className="w-full border rounded px-3 py-2"
                onChange={(e) => handleFieldChange("region", e.target.value)} 
                >
                <option value="">Selecciona una opción</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>)
          }
          {(formData.region) && (
              <div className="mb-4">              
                <label htmlFor="select commune" className="block font-medium mb-2">Selecciona tu comuna de residencia:</label>
                <select 
                  id="commune"
                  className="w-full border rounded px-3 py-2"
                  onChange={(e) => handleFieldChange("commune", e.target.value)} 
                  >
                  <option value="">Selecciona una opción</option>
                  {regions_commmunes[formData.region].map((commune, index) => (
                    <option key={index} value={commune}>
                      {commune}
                    </option>
                  ))}
                </select>
            </div>
            )            
          }
          {(formData.country) && (
            <div className="mb-4">
            <label htmlFor="select address" className="block font-medium mb-2">Domicilio</label>
            <input 
              type="address" 
              id="address" 
              className="w-full border rounded px-3 py-2" 
              value={formData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)} 
            />
            </div>
            )
          }
          <div className='flex'>
            <button type="button" 
              onClick={goToNextPart} 
              className='nextPart-btn p-2 rounded shadow-md w-1/3 font-bold ml-auto bg-purple-700 hover:bg-purple-800'>
                Siguiente
            </button>
          </div>
          <div>
            <StepIndicator actualStep={1}/>
          </div>
          </div>
        </div>
      )
    
};

export default PartOneForm;
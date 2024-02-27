import React from 'react';
import './formEvaluation-style.css';
import StepIndicator from './indicators';

const PartThreeForm = ({formData, handleFieldChange, goToNextPart, goToPreviousPart}) => {

    return (
      <div className={`bg-gray-100`}>
        <div className={`bg-white p-8 rounded shadow-md min-w-[33vw] w-1/3 visible`}>
          <h2 className="text-2xl font-semibold mb-4">Evalúame: Paso 3/4</h2>
            <div className="mb-4">
              <label htmlFor="Property Valuation" className="block font-medium mb-2">Indique la valorización de sus propiedades [pesos]:</label>
              <select 
                  id="propertyValuation" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.propertyValuation}
                  onChange={(e) => handleFieldChange("propertyValuation", e.target.value)}
                >
                  <option value="Rango 1">Menor o igual a $50.000.000</option>
                  <option value="Rango 2">Entre $50.000.001 y $80.000.000</option>
                  <option value="Rango 3">Entre $80.000.001 y $120.000.000</option>
                  <option value="Rango 4">Más de $120.000.000</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="Vehicle Valuation" className="block font-medium mb-2">Indique la valorización de sus vehículos [pesos]:</label>
                <select 
                  type="number" 
                  id="vehicleValuation" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.vehicleValuation}
                  onChange={(e) => handleFieldChange("vehicleValuation", e.target.value)}                 
                >
                  <option value="Rango 1">Menor o igual a $10.000.000</option>
                  <option value="Rango 2">Entre $10.000.001 y $20.000.000</option>
                  <option value="Rango 3">Entre $20.000.001 y $35.000.000</option>
                  <option value="Rango 4">Más de $35.000.000</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="Saving Valuation" className="block font-medium mb-2">Indique la valorización de sus ahorros [pesos]:</label>
                <select 
                  type="number" 
                  id="savingValuation" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.savingValuation}
                  onChange={(e) => handleFieldChange("savingValuation", e.target.value)}                 
                >
                  <option value="Rango 1">Menor o igual a $10.000.000</option>
                  <option value="Rango 2">Entre $10.000.001 y $20.000.000</option>
                  <option value="Rango 3">Entre $20.000.001 y $35.000.000</option>
                  <option value="Rango 4">Más de $35.000.000</option>
              </select>
            </div>          
            <div className="mb-4">
              <label htmlFor="Other Assets Valuation" className="block font-medium mb-2">Indique la valorización de sus otros activos [pesos]:</label>
                <select 
                  type="number" 
                  id="otherAssetsValuation" 
                  className="w-full border rounded px-3 py-2"
                  value={formData.otherAssetsValuation}
                  onChange={(e) => handleFieldChange("otherAssetsValuation", e.target.value)}                 
                >
                  <option value="Rango 1">Menor o igual a $5.000.000</option>
                  <option value="Rango 2">Entre $5.000.001 y $20.000.000</option>
                  <option value="Rango 3">Entre $20.000.001 y $45.000.000</option>
                  <option value="Rango 4">Más de $45.000.000</option>
              </select>
            </div>
            <div className='flex'>
              <button type="button" 
                onClick={goToPreviousPart} 
                className='previousPart-btn p-2 rounded shadow-md w-1/3 font-semibold md-auto bg-purple-300 hover:bg-purple-400'>
                  Volver
              </button>
              <button type="button" 
                onClick={goToNextPart} 
                className='nextPart-btn p-2 rounded shadow-md w-1/3 font-bold ml-auto bg-purple-700 hover:bg-purple-800'>
                  Siguiente
              </button>  
            </div>
            <div>
              <StepIndicator actualStep={3}/>
            </div>
          </div>        
      </div>
    )
}

export default PartThreeForm;
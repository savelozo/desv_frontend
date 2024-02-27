import React from 'react';
import EvaluameFormButton from './evaluameButtonForm';
import './formEvaluation-style.css';
import StepIndicator from './indicators';

const PartFourForm = ({formData, handleFieldChange, goToPreviousPart}) => {

    return (
      <div className={`bg-gray-100`}>
        <div className={`bg-white p-8 rounded shadow-md min-w-[33vw] w-1/3 visible`}>
          <h2 className="text-2xl font-semibold mb-4">Evalúame: Paso 4/4</h2>
            <div className="mb-4">
            <label htmlFor="Automotive Commercial Consumption Valuation" className="block font-medium mb-2">Indique la deuda de su crédito automotriz:</label>
              <select 
                type="number" 
                id="automotiveCommercialConsumptionValuation" 
                className="w-full border rounded px-3 py-2"
                value={formData.automotiveCommercialConsumptionValuation}
                onChange={(e) => handleFieldChange("automotiveCommercialConsumptionValuation", e.target.value)}                 
              >
                <option value="Rango 1">Sin deuda</option>
                <option value="Rango 2">Entre $1 y $10.000.000</option>
                <option value="Rango 3">Entre $10.000.001 y $20.000.000</option>
                <option value="Rango 4">Entre $20.000.001 y $35.000.000</option>
                <option value="Rango 5">Más de $350.000.000</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Valuation Credit Card Credit Line" className="block font-medium mb-2">Indique el valor de su deuda en la tarjeta y línea de crédito:</label>
              <select 
                type="number" 
                id="valuationCreditCardCreditLine" 
                className="w-full border rounded px-3 py-2"
                value={formData.valuationCreditCardCreditLine}
                onChange={(e) => handleFieldChange("valuationCreditCardCreditLine", e.target.value)}                 
              >
                <option value="Rango 1">Sin deuda</option>
                <option value="Rango 2">Entre $1 y $1.000.000</option>
                <option value="Rango 3">Entre $1.000.001 y $5.000.000</option>
                <option value="Rango 4">Entre $5.000.001 y $10.000.000</option>
                <option value="Rango 5">Más de $10.000.000</option>
            </select>
          </div> 
          <div className="mb-4">
            <label htmlFor="Mortgage Credit Valuation" className="block font-medium mb-2">Indique la deuda de su crédito hipotecario:</label>
              <select 
                type="number" 
                id="mortgageCreditValuation" 
                className="w-full border rounded px-3 py-2"
                value={formData.mortgageCreditValuation}
                onChange={(e) => handleFieldChange("mortgageCreditValuation", e.target.value)}                 
              >
                <option value="Rango 1">Sin deuda</option>
                <option value="Rango 2">Entre $1 y $50.000.000</option>
                <option value="Rango 3">Entre $50.000.001 y $80.000.000</option>
                <option value="Rango 4">Entre $80.000.001 y $120.000.000</option>
                <option value="Rango 5">Más de $120.000.000</option>
            </select>
          </div>          
          <div className="mb-4">
            <label htmlFor="Rent Expenses Valuation" className="block font-medium mb-2">Indique el valor promedio de sus gastos de arriendo:</label>
              <select 
                type="number" 
                id="rentExpensesValuation" 
                className="w-full border rounded px-3 py-2"
                value={formData.rentExpensesValuation}
                onChange={(e) => handleFieldChange("rentExpensesValuation", e.target.value)}                 
              >
                <option value="Rango 1">Sin deuda</option>
                <option value="Rango 2">Entre $1 y $250.000</option>
                <option value="Rango 3">Entre $250.001 y $500.000</option>
                <option value="Rango 4">Entre $500.001 y $1.200.000</option>
                <option value="Rango 5">Más de $1.200.000</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Other Liabilities Valuation" className="block font-medium mb-2">Indique la valorización de sus otros pasivos:</label>
              <select 
                type="number" 
                id="otherLiabilitiesValuation" 
                className="w-full border rounded px-3 py-2"
                value={formData.otherLiabilitiesValuation}
                onChange={(e) => handleFieldChange("otherLiabilitiesValuation", e.target.value)}                 
              >
                <option value="Rango 1">Sin deuda</option>
                <option value="Rango 2">Entre $1 y $2.000.000</option>
                <option value="Rango 3">Entre $2.000.001 y $5.000.000</option>
                <option value="Rango 4">Entre $5.000.001 y $15.000.000</option>
                <option value="Rango 5">Más de $15.000.000</option>
            </select>              
          </div>
          <div className='flex'>
            <button type="button" 
                onClick={goToPreviousPart} 
                className='previousPart-btn p-2 rounded shadow-md w-1/3 font-semibold md-auto bg-purple-300 hover:bg-purple-400'>
                  Volver
              </button>
              <EvaluameFormButton 
                formData={formData}             
              />
          </div>
          <div>
            <StepIndicator actualStep={4}/>
          </div>
          </div>        
      </div>
    )

}

export default PartFourForm;
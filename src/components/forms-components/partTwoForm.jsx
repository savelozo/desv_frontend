import React from 'react';
import './formEvaluation-style.css';
import StepIndicator from './indicators';

const PartTwoForm = ({formData, handleFieldChange, goToNextPart, goToPreviousPart}) => {

    return (
      <div className={`bg-gray-100`}>
      <div className={`bg-white p-8 rounded shadow-md min-w-[33vw] w-1/3 visible`}>
        <h2 className="text-2xl font-semibold mb-4">Evalúame: Paso 2/4</h2>
          <div className="mb-4">
            <label htmlFor="income" className="block font-medium mb-2">Indique su ingreso mensual promedio:</label>
              <input 
                type="number" 
                id="income" 
                className="w-full border rounded px-3 py-2"
                value={formData.income}
                onChange={(e) => handleFieldChange("income", e.target.value)}                 
              />
          </div>
          <div className="mb-4">
            <label htmlFor="bankProducts" className="block font-medium mb-2">¿Tienes cuenta corriente?</label>
              <select 
                id="selectbankProducts" 
                className="w-full border rounded px-3 py-2"
                value={formData.bankProducts}
                onChange={(e) => handleFieldChange("bankProducts", e.target.value)}
              >
                <option value="No">No</option>
                <option value="Sí">Sí</option>
              </select>
          </div>
          {(formData.bankProducts == "Sí") && (<div className="mb-4">
              <label htmlFor="bankProductAge" className="block font-medium mb-2">¿Desde cuándo tienes cuenta corriente app?</label>
              <input 
                type="month" 
                id="bankProductAge" 
                className="w-full border rounded px-3 py-2"
                value={formData.init_date_employ}
                onChange={(e) => handleFieldChange("bankProductAge", e.target.value)}                 
              />
          </div>)}
          <div className="mb-4">
            <label htmlFor="select education level" className="block font-medium mb-2">Elija su nivel de estudios:</label>
            <select 
              id="selectEducationLevel" 
              className="w-full border rounded px-3 py-2"
              value={formData.educationLevel}
              onChange={(e) => handleFieldChange("educationLevel", e.target.value)}
            >
              <option value="Básica Incompleta">Básica Incompleta</option>
              <option value="Básica Completa">Básica Completa</option>
              <option value="Media Incompleta">Media Incompleta</option>
              <option value="Media Completa">Media Completa</option>
              <option value="Téc. Sup. Incompleta">Téc. Sup. Incompleta</option>
              <option value="Téc. Sup. Completa">Téc. Sup. Completa</option>
              <option value="Profesional Incompleta">Profesional Incompleta</option>
              <option value="Profesional Completa">Profesional Completa</option>
              <option value="Post-Grado Incompleta">Post-Grado Incompleta</option>
              <option value="Post-Grado Completa">Post-Grado Completa</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="select employment status" className="block font-medium mb-2">Elija su situación laboral:</label>
            <select
              id="selectEmploymentStatus"
              className="w-full border rounded px-3 py-2"
              value={formData.employmentStatus}
              onChange={(e) => handleFieldChange("employmentStatus", e.target.value)}
            >
              <option value="Unemployed">Cesante</option>
              <option value="Dependent">Trabajador Dependiente</option>
              <option value="Independet">Trabajador Independiente</option>              
            </select>
          </div>
          {(formData.employmentStatus == 'Dependent' || formData.employmentStatus == 'Independent') && (
            <div className="mb-4">
              <label htmlFor="select industry" className="block font-medium mb-2">Elige el tipo de industria en que se desempeña:</label>
              <select 
                id="selectIndustry" 
                className="w-full border rounded px-3 py-2"
                value={formData.industry}
                onChange={(e) => handleFieldChange("industry", e.target.value)}
              >
                <option value="Servicios financieros y empresariales">Servicios financieros y empresariales</option>
                <option value="Minería">Minería</option>
                <option value="Servicios Personales">Servicios Personales</option>
                <option value="Comercio, Restaurantes y Hoteles">Comercio, Restaurantes y Hoteles</option>
                <option value="Industria manufacturera">Industria manufacturera</option>
                <option value="Servicios de vivienda e Inmobiliarios">Servicios de vivienda e Inmobiliarios</option>
                <option value="Construcción">Construcción</option>
                <option value="Administración Pública">Administración Pública</option>
                <option value="Transporte">Transporte</option>
                <option value="Agropecuario">Agropecuario</option>
                <option value="Electricidad, gas, agua y gestión de desechos">Electricidad, gas, agua y gestión de desechos</option>
                <option value="Comunicaciones y servicios de información">Comunicaciones y servicios de información</option>
                <option value="Pesca">Pesca</option>
              </select>
            </div>
          )}
          {(formData.employmentStatus == 'Dependent' || formData.employmentStatus == 'Independent') && (
            <div className="mb-4">              
              <label htmlFor="occupation" className="block font-medium mb-2">Selecciona tu ocupación:</label>
              <select 
                id="occupation"
                className="w-full border rounded px-3 py-2"
                onChange={(e) => handleFieldChange("occupation", e.target.value)} 
                >
                {occupations.map((occupation, index) => (
                  <option key={index} value={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
            </div>
          )}
          {(formData.employmentStatus == 'Dependent' || formData.employmentStatus == 'Independent') && (
            <div className="mb-4">
              <label htmlFor="init_date_employ" className="block font-medium mb-2">Indica el mes y año de inicio de tu situación laboral:</label>
              <input 
                type="month" 
                id="init_date_employ" 
                className="w-full border rounded px-3 py-2"
                value={formData.init_date_employ}
                onChange={(e) => handleFieldChange("init_date_employ", e.target.value)}                 
              />
            </div>)}
          <div className="mb-4">
            <label htmlFor="dicomStatus" className="block font-medium mb-2">¿Estás en Dicom?</label>
              <select 
                id="dicomStatus" 
                className="w-full border rounded px-3 py-2"
                value={formData.dicom}
                onChange={(e) => handleFieldChange("dicom", e.target.value)}
              >
                <option value="No">No</option>
                <option value="Sí">Sí</option>
              </select>
          </div>
          <div className='flex'>
            <button type="button" 
              onClick={goToPreviousPart} 
              className='previousPart-btn p-2 rounded shadow-md w-1/3 font-bold md-auto bg-purple-300 hover:bg-purple-400'>
                Volver
            </button>
            <button type="button" 
              onClick={goToNextPart} 
              className='nextPart-btn p-2 rounded shadow-md w-1/3 font-semibold ml-auto bg-purple-700 hover:bg-purple-800'>
                Siguiente
            </button>
          </div>
          <div>
            <StepIndicator actualStep={2}/>
          </div>
        </div>
        </div>
    )

}

export default PartTwoForm;
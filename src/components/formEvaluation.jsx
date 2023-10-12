import React, { useState } from 'react';
import EvaluameFormButton from './forms-components/evaluameButtonForm';
import LoadingComponent from './loadingComponent';

const EvaluameForm = () => {
  const [isActive, setIsActive] = useState(true);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    nationality: '',
    address: '',
    incomeLevel: 'Entre $0 y $500.000',
    educationLevel: 'Básica Incompleta',
    employmentStatus: 'Cesante',
    industry: 'Servicios financieros y empresariales',
  }); 

  // Manejar cambios en la selección de situación laboral
  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };    

  return (
    <div className={`bg-gray-100 flex items-center justify-center lg:w-1/3 h-auto`}>
      <div className={`bg-white p-8 rounded shadow-md w-full min-w-full ${isActive ? 'visible' : 'hidden'}`}>
        <h2 className="text-2xl font-semibold mb-4">Evalúame</h2>
        <form>
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
            <label htmlFor="nationality" className="block font-medium mb-2">Nacionalidad</label>
            <input 
              type="text" 
              id="nationality" 
              className="w-full border rounded px-3 py-2"
              value={formData.nationality}
              onChange={(e) => handleFieldChange("nationality", e.target.value)}  
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-2">Domicilio</label>
            <input 
              type="address" 
              id="address" 
              className="w-full border rounded px-3 py-2" 
              value={formData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="selectOption" className="block font-medium mb-2">Elija su nivel de ingresos:</label>
            <select 
              id="selectOption" 
              className="w-full border rounded px-3 py-2"
              value={formData.incomeLevel}
              onChange={(e) => handleFieldChange("incomeLevel", e.target.value)} 
            >
              <option value="option1">Entre $0 y $500.000</option>
              <option value="option2">Entre $500.000 y $1.000.000</option>
              <option value="option3">Entre $1.000.000 y $1.500.000</option>
              <option value="option4">Entre $1.500.000 y $2.000.000</option>
              <option value="option5">Más de $2.000.000</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="selectOption" className="block font-medium mb-2">Elijs su nivel de estudios:</label>
            <select 
              id="selectOption" 
              className="w-full border rounded px-3 py-2"
              value={formData.educationLevel}
              onChange={(e) => handleFieldChange("educationLevel", e.target.value)}
            >
              <option value="option1">Básica Incompleta</option>
              <option value="option2">Básica Completa</option>
              <option value="option3">Media Incompleta</option>
              <option value="option4">Media Completa</option>
              <option value="option5">Téc. Sup. Incompleta</option>
              <option value="option1">Téc. Sup. Completa</option>
              <option value="option2">Profesional Incompleta</option>
              <option value="option3">Profesional Completa</option>
              <option value="option4">Post-Grado Incompleta</option>
              <option value="option5">Post-Grado Completa</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="selectEmploymentStatus" className="block font-medium mb-2">Elija su situación laboral:</label>
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
              <label htmlFor="selectIndustry" className="block font-medium mb-2">Elige el tipo de industria en que se desempeña:</label>
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
          <EvaluameFormButton 
            formData={formData} 
            isActive={isActive} 
            setIsActive={setIsActive}               
          />
        </form>
      </div>
      <div className={`bg-white p-8 rounded shadow-md w-full min-w-full ${!isActive ? 'visible' : 'hidden'}`}>
        {!isActive && <LoadingComponent active={isActive}/>}
      </div>
    </div>
  );
};

export default EvaluameForm;

import React,  { useState, useRef, useEffect } from 'react';
import EvaluameFormButton from './evaluameButtonForm';
import LoadingComponent from '../loadingComponent';
import PartOneForm from './partOneform';
import PartTwoForm from './partTwoForm';
import PartThreeForm from './partThreeForm';
import PartFourForm from './partFourForm';

const EvaluameForm = ({buttonsStatus}) => {
  const [isActive, setIsActive] = useState(true);
  
  const [formData, setFormData] = useState({
    buttonsStatus: buttonsStatus,
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    nationality: 'Sí',
    address: '',
    income: 0,
    educationLevel: 'Básica Incompleta',
    employmentStatus: 'Cesante',
    industry: 'Servicios financieros y empresariales',
    occupation: '',
    country: "",
    region: "",
    commune: "",
    init_date_employ: "",
    bankProducts: "",
    bankProductsAge: 0,
    propertyValuation: 'Rango 1',
    vehicleValuation: 'Rango 1',
    savingValuation: 'Rango 1',
    otherAssetsValuation: 'Rango 1',
    automotiveCommercialConsumptionValuation: 'Rango 1',
    valuationCreditCardCreditLine: 'Rango 1',
    mortgageCreditValuation: 'Rango 1',
    rentExpensesValuation: 'Rango 1',
    otherLiabilitiesValuation: 'Rango 1',
    dicom: "No"
  });

  const [currentPart, setCurrentPart] = useState(0);
  const partOneRef = useRef(null);
  const partTwoRef = useRef(null);
  const partThreeRef = useRef(null);
  const partFourRef = useRef(null);


  const goToNextPart = () => {
      // Validación de la parte actual
      if (currentPart === 1) {
          setCurrentPart(2);
      } else if (currentPart === 2) {
          setCurrentPart(3);
      } else if (currentPart === 3) {
        setCurrentPart(4);
    }
  };

  const goToPreviousPart = () => {
      // Validación de la parte actual
    if (currentPart === 2) {
          setCurrentPart(1);
      } else if (currentPart === 3) {
          setCurrentPart(2);
      } else if (currentPart === 4) {
        setCurrentPart(3);
    }
  };

  const animateExit = (element) => {
    element.style.transform = 'translateX(-200%)';
    element.style.transition = 'transform 1s ease-in-out';
  };

  const animateEntry = (element) => {
      element.style.transform = 'translateX(0)';
      element.style.transition = 'transform 1s ease-in-out';
  };

  // Manejar cambios en la selección de situación laboral
  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

    // useEffect para el montaje del componente
    useEffect(() => {
      setCurrentPart(1)
  }, []);
  
  useEffect(() => {
    if (currentPart === 1) {
       animateEntry(partOneRef.current);
    } else if (currentPart === 2) {
        if (partOneRef.current) animateExit(partOneRef.current);
        if (partTwoRef.current) animateEntry(partTwoRef.current);
    } else if (currentPart === 3) {
      if (partTwoRef.current) animateExit(partTwoRef.current);   
      if (partThreeRef.current) animateEntry(partThreeRef.current);     
    } else if (currentPart === 4) {
      if (partThreeRef.current) animateExit(partThreeRef.current);   
      if (partFourRef.current) animateEntry(partFourRef.current);     
    }    
  }, [currentPart]);

  return (
    <div className={`flex items-center justify-center lg:w-1/3 h-auto`} >
      <form className={`${isActive ? 'visible' : 'hidden'}`}>        
        <div ref={partOneRef} style={{ transform: 'translateX(100%)' }}>
          {currentPart === 1 &&            
              <PartOneForm
                formData={formData}
                handleFieldChange={handleFieldChange}
                goToNextPart={goToNextPart}     
              />
          }            
        </div>                
        <div ref={partTwoRef} style={{ transform: 'translateX(100%)' }}>
          {currentPart === 2 &&             
              <PartTwoForm 
                formData={formData}
                handleFieldChange={handleFieldChange}
                goToNextPart={goToNextPart}
                goToPreviousPart={goToPreviousPart}           
              />
          }            
        </div>
        <div ref={partThreeRef} style={{ transform: 'translateX(100%)' }}>
          {currentPart === 3 &&             
              <PartThreeForm 
                formData={formData}
                handleFieldChange={handleFieldChange}
                goToNextPart={goToNextPart}
                goToPreviousPart={goToPreviousPart}           
              />
          }            
        </div>          
        <div ref={partFourRef} style={{ transform: 'translateX(100%)' }}>
          {currentPart === 4 &&            
            <div>
              <PartFourForm 
                formData={formData}
                handleFieldChange={handleFieldChange}
                goToPreviousPart={goToPreviousPart}      
              />
            </div>
          }               
        </div>           
      </form>
      <div className={`bg-white p-8 rounded shadow-md w-full min-w-full ${!isActive ? 'visible' : 'hidden'}`}>
        {!isActive && <LoadingComponent active={isActive}/>}
      </div>
    </div>
  );
};

export default EvaluameForm;

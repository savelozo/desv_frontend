'use client'
import React, { useState } from 'react';
import SelectionButton from './selectionButton';
import EvaluameButton from './evaluameButton';

const buttonsLabel = [
  'Casa', 'Auto', 'Quinchito', 'Jubilación',
  'Inversión', 'Ahorro', 'Reunificación de deuda', 'Comenzar negocio'
];

const ButtonsGrid = ( { setEvaluameStatus, buttonsStatus, setButtonsStatus } ) => {

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleButtonStatusChange = (index) => {
    const newButtonsStatus = [...buttonsStatus];
    newButtonsStatus[index] = !newButtonsStatus[index];
    setButtonsStatus(newButtonsStatus);
    if (newButtonsStatus.filter((item) => item === true).length){
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }    
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 pb-5">
        {buttonsLabel.map((label, index) => (
          <SelectionButton
            key={index}
            imgBtn={index + 1}
            buttonLabel={label}
            isActive={buttonsStatus[index]}
            changeStatusButton={handleButtonStatusChange}
          />
        ))}        
      </div>
      <div className="flex justify-center">
        <EvaluameButton 
            buttonKey={999} 
            buttonsStatus={buttonsStatus} 
            setEvaluameStatus={setEvaluameStatus}
            disabled={buttonDisabled}
          />
      </div>
    </div>
  );
};

export default ButtonsGrid;


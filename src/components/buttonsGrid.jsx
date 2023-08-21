'use client'
import React, { useState } from 'react';
import SelectionButton from './selectionButton';
import EvaluameButton from './evaluameButton';

  const buttonsLabel = [
    'Casa', 'Auto', 'Quinchito', 'Jubilación',
    'Inversión', 'Ahorro', 'Reunificación de deuda', 'Comenzar negocio'
  ];

const ButtonsGrid = () => {

  const [buttonsStatus, setButtonsStatus] = useState(Array(buttonsLabel.length).fill(false));

  const handleButtonStatusChange = (index) => {
    const newButtonsStatus = [...buttonsStatus];
    newButtonsStatus[index] = !newButtonsStatus[index];
    setButtonsStatus(newButtonsStatus);
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
        <EvaluameButton buttonKey={999} buttonsStatus={buttonsStatus}/>
      </div>
    </div>
  );
};

export default ButtonsGrid;


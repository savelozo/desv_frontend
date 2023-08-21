'use client'
import React, { useState } from 'react';
import SelectionButton from './selectionButton';
import EvaluameButton from './evaluameButton';

const ButtonsGrid = () => {
  const buttonsLabel = [
    'Casa', 'Auto', 'Quinchito', 'Jubilación',
    'Inversión', 'Ahorro', 'Reunificación de deuda', 'Comenzar negocio'
  ];

  const [buttonsStatus, setButtonsStatus] = useState(Array(buttonsLabel.length).fill(0));

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
            onStatusChange={() => handleButtonStatusChange(index)}
          />
        ))}        
      </div>
      <div className="flex justify-center">
        <EvaluameButton buttonKey={999} />
      </div>
    </div>
  );
};

export default ButtonsGrid;


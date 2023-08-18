import React from 'react';
import SelectionButton from './selectionButton';

const ButtonGrid = () => {

    const buttons = [];
    const buttonsLabel = ["Casa","Auto","Quinchito","Jubilación","Inversión","Ahorro","Reunificación de deuda","Comenzar negocio"]

  return (
    <div className="grid grid-cols-3 gap-4 pb-5">
      {buttonsLabel.map((label, index) => (
        <SelectionButton
            buttonKey={index + 1}
            buttonLabel={label}
        />
      ))}
    </div>
  );
};

export default ButtonGrid;

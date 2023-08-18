import React from 'react';
import SelectionButton from './selectionButton';

const ButtonGrid = () => {

    const buttons = [];
    const buttonsLabel = ["Casa","Auto","Quinchito","Jubilación","Inversión","Ahorro","Reunificación de deuda","Comenzar negocio"]

    for (let i = 1; i <= buttonsLabel.length; i++) {
      buttons.push(
        <SelectionButton
            buttonKey={i}
            buttonLabel={buttonsLabel[i - 1]}
        />
      );
    }

  return (
    <div className="grid grid-cols-3 gap-4">
        {buttons}
    </div>
  );
};

export default ButtonGrid;

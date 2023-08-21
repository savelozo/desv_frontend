
import React from 'react';

const EvaluameButton = ({ buttonKey, buttonsStatus }) => {

    const handleButtonClick = () => {
      console.log(buttonsStatus)
        };

  return (
    <button
        key={buttonKey}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold pb-2 pt-0 px-4 rounded mb-4"
        onClick={handleButtonClick}>
        <div className="flex flex-col items-center">        
            <span className="mt-2">¡Evalúame!</span>
        </div>
    </button>
  );
};


export default EvaluameButton;
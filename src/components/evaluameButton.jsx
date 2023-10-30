
import React from 'react';

const EvaluameButton = ({ buttonKey, buttonsStatus, setEvaluameStatus, disabled }) => {

  const handleButtonClick = () => {
    setEvaluameStatus(false)
      };

  return (
    <button
      key={buttonKey}
      className={`${
          disabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        } font-semibold pb-2 pt-0 px-4 rounded mb-4`}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      <div className="flex flex-col items-center">        
          <span className="mt-2">¡Evalúame!</span>
      </div>
    </button>
  );
};


export default EvaluameButton;
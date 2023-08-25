import React from 'react';
import axios from 'axios';

const EvaluameFormButton = ({ formData }) => {

    const handleButtonClick = async (e) => {
      event.preventDefault();
      console.log("Enviando datos...")
      try {
        const response = await axios.post('http://localhost:8000/desv_form/submit_data/', formData);
        console.log(response.data.message);
      } catch (error) {
        console.log("Error:")
        console.error(error);
      }
    };

  return (
    <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold pb-2 pt-0 px-4 rounded mb-4 w-full"
        onClick={handleButtonClick}>
        <div className="flex flex-col items-center">        
            <span className="mt-2">Enviar mis datos</span>
        </div>
    </button>
  );
};


export default EvaluameFormButton;
import React, { useState } from 'react';
import axios from 'axios';

const EvaluameFormButton = ({ formData }) => {  

    const handleButtonClick = async (e) => {
      e.preventDefault();
      console.log("Enviando datos...")
      /*setIsActive(false)*/
      console.log(formData)
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
        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold pb-2 pt-0 px-4 rounded mb-4 ml-auto"
        onClick={handleButtonClick}>
        <div className="flex flex-col items-center">        
            <span className="mt-2">Enviar mis datos</span>
        </div>
    </button>
  );
};


export default EvaluameFormButton;

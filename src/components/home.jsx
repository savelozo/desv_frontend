'use client'
import React, { useState } from 'react';
import ButtonsGrid from './buttonsGrid';
import EvaluameForm from './formEvaluation';

const Home_page = () => {

  const [evaluameStatus, setEvaluameStatus] = useState(true);

  return (
      <div className="flex flex-col items-center justify-center h-screen">
        {evaluameStatus ? <ButtonsGrid setEvaluameStatus={setEvaluameStatus}/>:
         <EvaluameForm />}
      </div>  
  );
};

export default Home_page;

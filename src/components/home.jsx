'use client'
import React, { useState } from 'react';
import ButtonGrid from '../components/buttonGrid';
import EvaluameButton from './evaluameButton';

const Home_page = () => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <ButtonGrid />
        <EvaluameButton />
      </div>  
    </div>

  );
};

export default Home_page;

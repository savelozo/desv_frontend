'use client'
import React, { useState } from 'react';
import { HomeSvg, TruckSvg, ProjectSvg, BankNotesSvg, ChartBarSvg, CurrencySvg, CreditCardSvg, StoreFrontSvg } from './svgs';

const svg_list = [<HomeSvg/>,<TruckSvg />,<ProjectSvg />,<BankNotesSvg/>,<ChartBarSvg/>,<CurrencySvg/>,<CreditCardSvg/>,<StoreFrontSvg/>]

const SelectionButton = ({ imgBtn, buttonLabel }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center ${
        isSelected ? 'bg-slate-400' : 'bg-white hover:bg-slate-300'
      } text-sky-600 font-semibold py-2 px-4 rounded`}
    >
      <div className="flex flex-col items-center">
        {svg_list[imgBtn - 1]}
        <span className="mt-2">{buttonLabel}</span>
      </div>
    </button>
  );
};


export default SelectionButton;
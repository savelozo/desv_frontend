import React from 'react';
import { HomeSvg, TruckSvg, ProjectSvg, BankNotesSvg, ChartBarSvg, CurrencySvg, CreditCardSvg, StoreFrontSvg } from './svgs';


const SelectionButton = ({ buttonKey, buttonLabel }) => {

    const svg_list = [<HomeSvg/>,<TruckSvg />,<ProjectSvg />,<BankNotesSvg/>,<ChartBarSvg/>,<CurrencySvg/>,<CreditCardSvg/>,<StoreFrontSvg/>]

  return (
    <button
        key={buttonKey}
        className="flex items-center justify-center bg-white hover:bg-slate-300 text-sky-600 font-semibold py-2 px-4 rounded">
        <div className="flex flex-col items-center">        
            {svg_list[buttonKey - 1]}
            <span className="mt-2">{buttonLabel}</span>
        </div>
    </button>
  );
};


export default SelectionButton;
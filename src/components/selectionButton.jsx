import { HomeSvg, TruckSvg, ProjectSvg, BankNotesSvg, ChartBarSvg, CurrencySvg, CreditCardSvg, StoreFrontSvg } from './svgs';

const svg_list = [<HomeSvg/>,<TruckSvg />,<ProjectSvg />,<BankNotesSvg/>,<ChartBarSvg/>,<CurrencySvg/>,<CreditCardSvg/>,<StoreFrontSvg/>]

const SelectionButton = ({ imgBtn, buttonLabel }) => {

  return (
    <button
        key={imgBtn - 1}
        className="flex items-center justify-center bg-white hover:bg-slate-300 text-sky-600 font-semibold py-2 px-4 rounded">
        <div className="flex flex-col items-center">        
            {svg_list[imgBtn - 1]}
            <span className="mt-2">{buttonLabel}</span>
        </div>
    </button>
  );
};


export default SelectionButton;
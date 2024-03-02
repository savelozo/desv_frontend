import React from 'react';

const StepIndicator = ({ actualStep }) => {
  const totalSteps = 4;

  const indicatorStep = () => {
    let indicators = [];
    for (let i = 1; i <= totalSteps; i++) {
      indicators.push(
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${i === actualStep ? 'bg-purple-800' : 'bg-purple-200'}`}
        ></div>
      );
    }
    return indicators;
  };

  return (
    <div className="flex space-x-2 justify-center pt-4">
      {indicatorStep()}
    </div>
  );
};

export default StepIndicator;
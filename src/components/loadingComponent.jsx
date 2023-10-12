import React, { useState, useEffect } from 'react';

const buttonsLabel = [
    'Opción 1', 'Opción 2', 'Opción 3'
  ];

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const icons = [1,2,3];
  const possibleIcons = ['✅', '❌'];

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false); // Después de 2 segundos, cambia isLoading a false
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <div>Calculando resultados...</div> : 
      <div>
      <div className="grid grid-cols-3 gap-4 pb-5">
        {buttonsLabel.map((label, index) => (
            <div
                key={index}
                className={`flex items-center justify-center'bg-white hover:bg-slate-300 text-sky-600 font-semibold py-2 px-4 rounded`}
                >
                <div className="flex flex-col items-center">
                    <span className="mt-2">{label}</span>
                    {icons.map((icon, index) => (
                        <div key={index} className="flex items-center">
                        {possibleIcons[Math.round(Math.random())]} - Requisito {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        ))}        
      </div>
      <div className="grid grid-cols-2 gap-4 pb-5 flex justify-center">
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold pb-2 pt-0 px-4 rounded mb-4">
            <div className="flex flex-col items-center">        
                <span className="mt-2">Descargar informe</span>
            </div>
        </button>
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold pb-2 pt-0 px-4 rounded mb-4">
            <div className="flex flex-col items-center">        
                <span className="mt-2">Solicitar asesoría especializada</span>
            </div>
        </button>
      </div>
    </div>}
    </div>
  );
};

export default LoadingComponent;
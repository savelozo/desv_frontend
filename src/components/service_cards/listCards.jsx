import React from 'react';
import './cards.css'
import ServiceCard from './cards';

const dataCards = [{
    title: "Servicio 1",
    description: "Descripción del Servicio 1",
    detail: "Detalle sobre servicio 1"
},
{
    title: "Servicio 2",
    description: "Descripción del Servicio 2",
    detail: "Detalle sobre servicio 2"
},
{
    title: "Servicio 3",
    description: "Descripción del Servicio 3",
    detail: "Detalle sobre servicio 3"
}]

const ListServiceCards = ({ }) => {

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="cols">
            {dataCards.map((dataCard, index) => (
            <ServiceCard
                key={index}
                //imgBtn={index + 1}
                title={dataCard.title}
                description={dataCard.title.description}
                detail={dataCard.detail}
            />
            ))} 
        </div>
      </div>
    </div>
  );
};

export default ListServiceCards;
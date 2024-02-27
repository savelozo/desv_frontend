import React from 'react';
import './cards.css'

const ServiceCard = ({ title, description, detail, url }) => {

  const handleTouchStart = (e) => {
    e.currentTarget.classList.toggle('hover');
  };

  return (
    <div className="col" onTouchStart={handleTouchStart}>
      <div className="container">
        <div className="front" 
          style={{ backgroundImage: "url('https://th.bing.com/th/id/R.5107a428f8b2b61981415705a27b3c0c?rik=sWiT%2bSQWfvmFNw&riu=http%3a%2f%2fwww.rajnikantvscidjokes.in%2fwp-content%2fuploads%2f2015%2f09%2f1.31.jpg&ehk=BQhPPdKqkxUudAhGRg6dzUyzinhbQKM%2b3oHGHiPHU9Q%3d&risl=&pid=ImgRaw&r=0')" }}>
          <div className="inner">
            <p>{title}</p>
            <span>{description}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;







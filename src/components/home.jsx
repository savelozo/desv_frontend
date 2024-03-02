'use client'
import React, { useState, useRef } from 'react';
import ButtonsGrid from './buttonsGrid';
import EvaluameForm from './forms-components/formEvaluation';
import Header from './header/header';
import Footer from './footer/footer';
import Hero from './hero/hero';
import InfoSection from './infoSection/infoSection';
import ListServiceCards from './service_cards/listCards';
import AboutUsSection from './about_us/aboutUs';
import ReviewsSection from './reviewsSection/reviewsSection'

const data = {
  'title': "Obtén tu crédito",
  'content': "Conoce tu nivel de riesgo crediticio y obtén las mejores recomendaciones para mejorarlo"
}
 
const buttonsLabel = [
  'Casa', 'Auto', 'Quinchito', 'Jubilación',
  'Inversión', 'Ahorro', 'Reunificación de deuda', 'Comenzar negocio'
];

const Home_page = () => {

  const formSectionRef = useRef(null);
  const [evaluameStatus, setEvaluameStatus] = useState(true);
  const [buttonsStatus, setButtonsStatus] = useState(Array(buttonsLabel.length).fill(false));

  const scrollToInfoSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Hero onButtonClick={scrollToInfoSection}/>
      <AboutUsSection />
      <InfoSection title={data.title} content={data.content}/>
      <div className="flex flex-col items-center justify-center min-h-screen flex items-center justify-center p-2" ref={formSectionRef}>
        {evaluameStatus ? <ButtonsGrid setEvaluameStatus={setEvaluameStatus} 
                                      buttonsStatus={buttonsStatus} 
                                      setButtonsStatus={setButtonsStatus}

                                      />:
         <EvaluameForm buttonsStatus={buttonsStatus}/>}
      </div>
      <ReviewsSection />
      <ListServiceCards />
      <Footer />
    </div>
  );
};

export default Home_page;

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
import ContactForm from './contact_form/contactForm';

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
  const AboutUsRef = useRef(null);
  const contactRef = useRef(null)
  const [evaluameStatus, setEvaluameStatus] = useState(true);
  const [buttonsStatus, setButtonsStatus] = useState(Array(buttonsLabel.length).fill(false));

  const scrollToFormSection = () => {
    formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    if (AboutUsRef.current) {
      const aboutUsPosition = AboutUsRef.current.getBoundingClientRect().top;
      const offsetPosition = aboutUsPosition + window.pageYOffset - (window.innerHeight / 4);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContactForm = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header 
        scrollToAboutUs={scrollToAboutUs} 
        scrollToContactForm={scrollToContactForm}
      />
      <Hero 
        onButtonClick={scrollToFormSection}
      />
      <div ref={AboutUsRef}>
        <AboutUsSection />
      </div>
      <InfoSection title={data.title} content={data.content}/>
      <div className="flex flex-col items-center justify-center min-h-screen flex items-center justify-center p-2" ref={formSectionRef}>
        {evaluameStatus ? <ButtonsGrid setEvaluameStatus={setEvaluameStatus} 
                                      buttonsStatus={buttonsStatus} 
                                      setButtonsStatus={setButtonsStatus}

                                      />:
         <EvaluameForm buttonsStatus={buttonsStatus}/>}
      </div>
      <ReviewsSection />
      {/* <ListServiceCards /> */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home_page;

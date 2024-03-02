import React, { Component } from 'react';
import Slide from './slides';

class ReviewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.goToSlide = this.goToSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.goToNextSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  goToSlide(index) {
    clearInterval(this.interval); // Limpia el intervalo actual
    this.setState({ activeIndex: index });
    this.startAutoRotate(); // Reinicia el intervalo 
  }

  goToNextSlide() {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex + 1) % 3
    }));
  }

  renderNavigation() {
    const { activeIndex } = this.state;
    return (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {[...Array(3).keys()].map(index => (
          <button
            key={index}
            className={`mx-2 w-2 h-2 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => this.goToSlide(index)}
            aria-label={`Ir a la slide ${index + 1}`}
          />
        ))}
      </div>
    );
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="relative w-full overflow-hidden">
          <Slide
            color="rgb(89,51,170)"
            alt="Reseñas"
            isActive={this.state.activeIndex === 0}
            title="Reseñas"
            content="El más confiable del mercado"
          >
            {this.renderNavigation()}
          </Slide>
          <Slide
            color="rgb(10,147,150)"
            alt="Datos actualizados"
            isActive={this.state.activeIndex === 1}
            title="Datos actualizados"
            content="La app financiera que necesitas"
          >
            {this.renderNavigation()}
          </Slide>
          <Slide
            color="rgb(89,51,170)"
            alt="Atención personalizada"
            isActive={this.state.activeIndex === 2}
            title="Atención personalizada"
            content="Encuentra la asesoría que buscas"
          >
            {this.renderNavigation()}
          </Slide>
        </div>
      </div>
    );
  }
}

export default ReviewsSection;

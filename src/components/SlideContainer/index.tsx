import { ReactNode, useState } from 'react';

import arrowLeft from '../../assets/svg/Scroll Arrow Left.svg';
import arrowRight from '../../assets/svg/Scroll Arrow Right.svg';

import { CardsSlide, Container } from './styles';

interface SlideContainerProps {
  children: ReactNode;
  numberOfProducts: number
}

const SlideContainer = ({ children, numberOfProducts }: SlideContainerProps) => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  
  function previousSlide() {
    // slide anterior positivo
    if(numberOfSlides === 0) {
      return;
    }
    setNumberOfSlides(numberOfSlides + 1);
  }

  function nextSlide() {
    // proximo slide negativo
    if(- numberOfSlides > (numberOfProducts - 4)) {
      return;
    }
    setNumberOfSlides(numberOfSlides - 1);
  }

  return(
    <Container>
      <img 
        src={arrowLeft}
        alt='Imagem da seta esquerda'
        onClick={() => previousSlide()}
      />
      <CardsSlide
        numberOfSlides={numberOfSlides}
      >
        {children}
      </CardsSlide>
      <img 
        src={arrowRight}
        alt='Imagem da seta direita'
        onClick={() => nextSlide()}
      />
    </Container>
  );
}

export default SlideContainer;
import { ReactNode, useState } from 'react';

import arrowLeft from '../../assets/svg/Scroll Arrow Left.svg';
import arrowRight from '../../assets/svg/Scroll Arrow Right.svg';

import { Container } from './styles';

interface SlideContainerProps {
  children: ReactNode;
}

const SlideContainer = ({ children }: SlideContainerProps) => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);

  function previousSlide() {
    if(numberOfSlides === 0) {
      return;
    }
    setNumberOfSlides(numberOfSlides + 1);
  }

  function nextSlide() {
    setNumberOfSlides(numberOfSlides - 1);
  }

  return(
    <Container
      numberOfSlides={numberOfSlides}
    >
      <img 
        src={arrowLeft}
        alt='Imagem da seta esquerda'
        onClick={() => previousSlide()}
      />
      <div>{children}</div>
      <img 
        src={arrowRight}
        alt='Imagem da seta direita'
        onClick={() => nextSlide()}
      />
    </Container>
  );
}

export default SlideContainer;
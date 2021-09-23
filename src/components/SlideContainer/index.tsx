import { ReactNode, useState } from 'react';

import arrowLeft from '../../assets/svg/Scroll Arrow Left.svg';
import arrowRight from '../../assets/svg/Scroll Arrow Right.svg';

import { Container } from './styles';

interface SlideContainerProps {
  children: ReactNode;
  numberOfProducts: number
}

const SlideContainer = ({ children, numberOfProducts }: SlideContainerProps) => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  console.log(numberOfSlides);
  
  function previousSlide() {
    setNumberOfSlides(numberOfSlides + 1);
  }

  function nextSlide() {
    setNumberOfSlides(numberOfSlides - 1);
  }

  return(
    <Container
      numberOfSlides={numberOfSlides}
    >
      {
        numberOfSlides < 0 && 
        <img 
          src={arrowLeft}
          alt='Imagem da seta esquerda'
          onClick={() => previousSlide()}
        />
      }
      <div>{children}</div>
      {
        - numberOfSlides < (numberOfProducts - 4) &&
        <img 
          src={arrowRight}
          alt='Imagem da seta direita'
          onClick={() => nextSlide()}
        />
      }
    </Container>
  );
}

export default SlideContainer;
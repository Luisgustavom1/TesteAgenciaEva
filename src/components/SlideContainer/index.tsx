import { ReactNode, useEffect, useState } from 'react';

import { CardsSlide, Container } from './styles';

interface SlideContainerProps {
  children: ReactNode;
  numberOfProducts: number
}

const SlideContainer = ({ children, numberOfProducts }: SlideContainerProps) => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [viewportWidth, setViewportWidth] = useState<number>({} as number);

  function previousSlide() {
    // slide anterior é positivo
    if(numberOfSlides === 0) {
      return;
    }
    setNumberOfSlides(numberOfSlides + 1);
  }

  const quantityOfSliders = viewportWidth < 620 ? 2 : viewportWidth < 900 ? 3 : viewportWidth < 1150 ? 4 : 5; 

  function nextSlide() {
    // proximo slide é negativo
    if(- numberOfSlides > (numberOfProducts - quantityOfSliders)) {
      return;
    }
    setNumberOfSlides(numberOfSlides - 1);
  }

  useEffect(() => {    
    function handleWidth() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, [])

  return(
    <Container>
      <svg width="19" height="37" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='arrow' onClick={() => previousSlide()}>
        <line y1="-0.5" x2="25.4558" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 19 38)" stroke="#E11383"/>
        <line y1="-0.5" x2="26.8701" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20 1)" stroke="#E11383"/>
      </svg>
      <CardsSlide
        numberOfSlides={numberOfSlides}
      >
        {children}
      </CardsSlide>
      <svg width="19" height="37" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='arrow' onClick={() => nextSlide()}>
        <line x1="0.646447" y1="37.6464" x2="18.6464" y2="19.6464" stroke="#E11383"/>
        <line x1="0.353553" y1="0.646447" x2="19.3536" y2="19.6464" stroke="#E11383"/>
      </svg>
    </Container>
  );
}

export default SlideContainer;
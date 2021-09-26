import { ReactNode } from 'react';
import SlideContainer from '../SlideContainer';

import { Container } from './styles';

interface SlideForCategoryProps {
  children: ReactNode;
  category?: string; 
  numberOfProducts: number;
}

const SlideForCategory = ({ children, category, numberOfProducts }: SlideForCategoryProps) => {
  return(
    <Container>
      <div>
        <span />
        <h1>Destaques {category && 'em ' + category}</h1>
      </div>
      <SlideContainer
        numberOfProducts={numberOfProducts}
      >
        {children}
      </SlideContainer>
    </Container>
  );
}

export default SlideForCategory;
import { ReactNode } from 'react';
import SlideContainer from '../SlideContainer';

import { Container } from './styles';

interface SlideForCategoryProps {
  children: ReactNode;
  category: string; 
  numberOfProducts: number;
}

const SlideForCategory = ({ children, category, numberOfProducts }: SlideForCategoryProps) => {
  return(
    <Container>
      <section>
        <span />
        <h1>Destaques em {category}</h1>
      </section>
      <SlideContainer
        numberOfProducts={numberOfProducts}
      >
        {children}
      </SlideContainer>
    </Container>
  );
}

export default SlideForCategory;
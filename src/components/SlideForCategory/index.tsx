import { ReactNode } from 'react';
import SlideContainer from '../SlideContainer';

import { Container } from './styles';

interface SlideForCategoryProps {
  children: ReactNode;
  category: string; 
}

const SlideForCategory = ({ children, category }: SlideForCategoryProps) => {
  return(
    <Container>
      <section>
        <span />
        <h1>Destaques em {category}</h1>
      </section>
      <SlideContainer>
        {children}
      </SlideContainer>
    </Container>
  );
}

export default SlideForCategory;
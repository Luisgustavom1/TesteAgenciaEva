import React from 'react';
import Categories from '../Categories';

import { Container } from './styles';

import livros from '../../assets/images/category-1.jpeg';
import escritorio from '../../assets/images/category-2.jpeg';
import vestuario from '../../assets/images/category-3.jpeg';

const SectionCategories: React.FC = () => {
  return(
    <Container>
      <Categories 
        background={livros}
      >
        Livros
      </Categories>
      <Categories 
        background={escritorio}
      >
        Escritório
      </Categories>
      <Categories 
        background={vestuario}
      >
        Vestuário
      </Categories>
    </Container>
  );
}

export default SectionCategories;
import { ReactNode } from 'react';

import { Container } from './styles';

interface CategoriesProps {
  background: string;
  children: ReactNode;
}

const Categories = ({ background, children }: CategoriesProps) => {
  return(
    <Container
      background={background}
    >
      <p>{children}</p>
    </Container>
  );
}

export default Categories;
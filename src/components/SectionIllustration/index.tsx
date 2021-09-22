import React from 'react';

import { Container } from './styles';

import caminhao from '../../assets/svg/caminhao.svg';
import cadeado from '../../assets/svg/cadeado.svg';
import cartao from '../../assets/svg/cartao.svg';

const SectionIllustration: React.FC = () => {
  return(
    <Container>
      <div>
        <img 
          src={cadeado}
          alt='Icon cadeado'
        />
        <p>Site Seguro</p>
      </div>
      <span />
      <div>
        <img 
          src={cartao}
          alt='Icon cartao'
        />
        <p>Até 12x sem juros</p>
      </div>
      <span />
      <div>
        <img 
          src={caminhao}
          alt='Icon cadeado'
        />
        <p>Entrega para todo o Brasil</p>
      </div>
    </Container>
  );
}

export default SectionIllustration;
import React from 'react';

import { Container } from './styles';

import loja from '../../assets/svg/loja.svg';
import mapa from '../../assets/svg/mapa.svg';
import wpp from '../../assets/svg/whatsapp.svg';
import email from '../../assets/svg/email.svg';

const Footer: React.FC = () => {
  return(
    <Container>
      <h1>Eva Shop</h1>
      <span></span>
      <section>
        <div>
          <img 
            src={loja}
            alt='Icon Loja'
          />
          <p>Quem Somos</p>
          <p>Política de privacidade</p>
          <p>Feedback de clientes</p>
          <p>Trocas e devoluções</p>
        </div>
        <div>
          <img 
            src={mapa}
            alt='Icon Mapa'
          />
          <p>Rua Av. Rio Negro, 1100</p>
          <p>Jardim Roselandia</p>
          <p>14406-005</p>
          <p>Franca/SP</p>
        </div>
        <div>
          <img 
            src={loja}
            alt='Icon Loja'
          />
          <p>
            <img 
              src={wpp} 
              alt='Icon do whatsapp'
            /> 
            (16) 9 98179-7325
          </p>
          <p>
            <img 
              src={email}
              alt='Icon email'
            />
            contato@evacommerce.com.br
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Footer;
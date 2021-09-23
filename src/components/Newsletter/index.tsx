import React from 'react';

import { Container } from './styles';

import newsletter from '../../assets/svg/newsletter.svg';

const Newsletter: React.FC = () => {
  return(
    <Container>
      <section>
        <img
          src={newsletter}
          alt='Icon email da newsletter'
        />
        <p>Receba nossas novidades, descontos e muito mais</p>
      </section>
      <form>
        <div>
          <label>Digite seu nome</label>
          <input 
            placeholder='Digite seu nome'
          />
        </div>
        <div>
          <label>Digite seu nome</label>
          <input 
            placeholder='Digite seu nome'
          />
        </div>
      </form>
      <button
        type='submit'
      >
        Eu quero novidades
      </button>
    </Container>
  );
}

export default Newsletter;
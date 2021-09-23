import React, { FormEvent, useState } from 'react';

import { Container, FormStyle } from './styles';

import newsletter from '../../assets/svg/newsletter.svg';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [emptys, setEmptys] = useState({
    email: false,
    nome: false
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!email) {
      setEmptys({
        ...emptys,
        email: true
      })
    }

    if(!nome) {
      setEmptys({
        ...emptys,
        nome: true
      })
    }
  }

  return(
    <Container>
      <section>
        <img
          src={newsletter}
          alt='Icon email da newsletter'
        />
        <p>Receba nossas novidades, descontos e muito mais</p>
      </section>
      <FormStyle 
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label>Digite seu nome</label>
          <input 
            placeholder='Digite seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Digite seu nome</label>
          <input 
            placeholder='Digite seu nome'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </FormStyle>
      <button
        type='submit'
      >
        Eu quero novidades
      </button>
    </Container>
  );
}

export default Newsletter;
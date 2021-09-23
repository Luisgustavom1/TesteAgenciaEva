import React, { FormEvent, useEffect, useState } from 'react';

import { Container, FormStyle, InputStyle } from './styles';

import newsletter from '../../assets/svg/newsletter.svg';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [isEmpty, setIsEmpty] = useState({
    email: false,
    nome: false
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setIsEmpty({
      nome: !nome,
      email: !email
    });

    if(!email || !nome) {
      return;
    } else {
      setNome('');
      setEmail('');

      alert(`${nome} cadastrado(a) na nossa Newsletter com sucesso!`)
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
          <div>
            <label>Digite seu nome</label>
            <InputStyle
              isEmpty={isEmpty.nome}
              placeholder='Digite seu nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label>Digite seu nome</label>
            <InputStyle
              isEmpty={isEmpty.email}
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type='submit'
        >
          Eu quero novidades
        </button>
      </FormStyle>
    </Container>
  );
}

export default Newsletter;
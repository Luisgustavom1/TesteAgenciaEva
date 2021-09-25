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
        <svg viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.6 0H10.8C7.8219 0 5.4 2.35463 5.4 5.25001V18.375H10.8V10.5L28.08 23.1C28.5475 23.4404 29.1159 23.6244 29.7 23.6244C30.2841 23.6244 30.8525 23.4404 31.32 23.1L48.6 10.5V34.1251H27V39.3751H48.6C51.5781 39.3751 54 37.0204 54 34.1251V5.25001C54 2.35463 51.5781 0 48.6 0ZM29.7 17.7188L12.5982 5.25001H46.8018L29.7 17.7188Z" fill="#FDFDFD"/>
          <path d="M0 21H18.9V26.25H0V21ZM5.4 28.875H21.6V34.125H5.4V28.875ZM13.5 36.75H24.3V42H13.5V36.75Z" fill="#FDFDFD"/>
        </svg>
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
          Eu quero receber novidades!
        </button>
      </FormStyle>
    </Container>
  );
}

export default Newsletter;
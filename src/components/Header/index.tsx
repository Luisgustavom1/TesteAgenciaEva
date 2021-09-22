import React from 'react';

import { Busca, Container, ContainerDropdown } from './styles';

import logo from '../../assets/images/logo.png';
import usuario from '../../assets/svg/usuario.svg';
import seta from '../../assets/svg/seta-categorias.svg';
import busca from '../../assets/svg/busca.svg';
import carrinho from '../../assets/svg/carrinho.svg';

const Header: React.FC = () => {
  return(
    <Container>
      <img 
        src={logo}
        alt='Imagem da logo'
      />
      <ContainerDropdown>
        <p>Categorias</p>
        <img 
          src={seta}
          alt='Icon seta categorias'
        />
        <div>
          <ul>
            <li>Livros</li>
            <li>Escritório</li>
            <li>Vestuário</li>
            <li>Informártica</li>
          </ul>
        </div>
      </ContainerDropdown>
      <Busca>
        <input type="text" />
        <img 
          src={busca}
          alt='Icon da busca'
        />
      </Busca>
      <span> 
        <p>Minha Conta</p>
        <img 
          src={usuario}
          alt='Icon do usuario'
        />
      </span>
      <span>
        <p>Carrinho(2)</p>
        <img 
          src={carrinho}
          alt='Icon carrinho'
        />
      </span>
    </Container>
  );
}

export default Header;
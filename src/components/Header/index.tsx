import React, { useContext, useState } from 'react';

import { Busca, Container, ContainerDropdown } from './styles';

import logo from '../../assets/images/logo.png';
import usuario from '../../assets/svg/usuario.svg';
import seta from '../../assets/svg/seta-categorias.svg';
import busca from '../../assets/svg/busca.svg';
import carrinho from '../../assets/svg/carrinho.svg';
import menuHamburguer from '../../assets/svg/menu-hamburguer.svg';
import ShoppingCartContext from '../../Context/ShoppingCart';

const Header: React.FC = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);
  const [showMenu, setShowMenu] = useState(false);

  const shoppingCartSum = shoppingCart.reduce((acc, prox) => acc += prox.shoppingCartQuantity, 0);

  return(
    <Container
      showMenu={showMenu}
    >
      <img 
        src={logo}
        alt='Imagem da logo'
        className='logo'
      />
      <div>
        <ContainerDropdown>
          <p>Categorias</p>
          <img 
            src={seta}
            alt='Icon seta categorias'
          />
          <nav>
            <ul>
              <li>Livros</li>
              <li>Escritório</li>
              <li>Vestuário</li>
              <li>Informártica</li>
            </ul>
          </nav>
        </ContainerDropdown>
        <Busca>
          <input 
            type="text" 
            placeholder='Search Products'
          />
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
          <p>Carrinho({shoppingCartSum})</p>
          <img 
            src={carrinho}
            alt='Icon carrinho'
          />
        </span>
      </div>
      <img 
        src={menuHamburguer}
        alt='Icon Menu hamburguer'
        className='menuHamburguer'
        onClick={() => setShowMenu(!showMenu)}
      />
    </Container>
  );
}

export default Header;
import React, { useState } from 'react';

import { AsideStyle, Container, CountBanner } from './styles';

import banner from '../../assets/images/banner.jpeg';
import category1 from '../../assets/images/category-1.jpeg';
import category2 from '../../assets/images/category-2.jpeg';
import category3 from '../../assets/images/category-3.jpeg';

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(banner);

  function handleClick(banner: string, e: any) {
    setCurrentBanner(banner);

    e.target.checked = true;
  }

  return(
    <Container
      banner={currentBanner}
    >
    <AsideStyle>
      <h1>Seus Livros Favoritos</h1>
      <p>Estão te esperando aqui</p>
    </AsideStyle>
    <CountBanner>
      <input 
        type="radio" 
        name="banner" 
        id="banner1" 
        checked
        onClick={(e) => handleClick(banner, e)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner2"
        onClick={(e) => handleClick(category1, e)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner3" 
        onClick={(e) => handleClick(category2, e)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner4" 
        onClick={(e) => handleClick(category3, e)} 
      />
    </CountBanner>
    </Container>
  );
}

export default Banner;
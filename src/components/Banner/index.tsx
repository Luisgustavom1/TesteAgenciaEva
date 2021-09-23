import React, { useState } from 'react';

import { AsideStyle, Container, CountBanner } from './styles';

import banner from '../../assets/images/banner.jpeg';
import category1 from '../../assets/images/category-1.jpeg';
import category2 from '../../assets/images/category-2.jpeg';
import category3 from '../../assets/images/category-3.jpeg';

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(banner);

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
        onChange={() => setCurrentBanner(banner)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner2"
        onChange={() => setCurrentBanner(category1)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner3" 
        onChange={() => setCurrentBanner(category2)} 
      />
      <input 
        type="radio" 
        name="banner" 
        id="banner4" 
        onChange={() => setCurrentBanner(category3)} 
      />
    </CountBanner>
    </Container>
  );
}

export default Banner;
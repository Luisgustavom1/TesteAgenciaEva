import { Container } from './styles';

import estrelaCheia from '../../assets/svg/estrela-cheia.svg';
import estrelaVazia from '../../assets/svg/estrela.svg';
import { useEffect, useState } from 'react';

interface CardsProps {
  img: string;
  name: string;
  currentPrice: string;
  oldPrice?: string;
  discount: number;
  stars: number;
}

const Cards = ({ img, name, currentPrice, oldPrice, discount, stars }: CardsProps) => {
  const [fullStars, setFullStars] = useState(Array(stars).fill(true).concat(Array(5 - stars).fill(false)));

  return(
    <Container>
      <img
        src={img}
        alt={`${name} imagem`}
      />
      <section>
        <h2>{name}</h2>
        <span>
          {fullStars.map(star => 
            star ? 
            <img 
              src={estrelaCheia}
              alt={`Uma das ${stars}`}
            /> : 
            <img 
              src={estrelaVazia}
              alt={`Uma das ${5 - stars} vazias`}
            />
          )}
        </span>
        <p className='oldPrice'>{oldPrice}</p>
        <h3>
          R$ {currentPrice}
        </h3>
        <p>
          ou R$ {(Number(currentPrice) * (1 - discount / 100)).toFixed(2)} com {discount}% off no boleto
        </p>
      </section>
      <button>
        Comprar
      </button>
    </Container>
  );
}

export default Cards;
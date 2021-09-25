import { Container } from './styles';

import { useState } from 'react';

interface CardsProps {
  img: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  discount: number;
  stars: number;
}

const Cards = ({ img, name, currentPrice, oldPrice, discount, stars }: CardsProps) => {
  const [fullStars, setFullStars] = useState(Array(stars).fill(true).concat(Array(5 - stars).fill(false)));

  function formatPrice(price: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return(
    <Container>
      <div
        className='containerImg'
      >
        <img
          src={img}
          alt={`${name} imagem`}
        />
      </div>
      <div className='containerName'>
        <h2 className='nameOfProduct'>{name}</h2>
      </div>
      <section>
        <span className='containerStars'>
          {fullStars.map((star, id) => 
            star ? 
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
              key={id}>
                <path fill="#EFD444" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg> : 
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" key={id}>
                <path fill="#EFD444" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
          )}
        </span>
        <p className='oldPrice'>{formatPrice(Number(oldPrice))}</p>
        <h3 className='currentPrice'>
          {formatPrice(Number(currentPrice))}
        </h3>
        <p className='discount'>
          ou {formatPrice((Number(currentPrice) * (1 - discount / 100)))} com {discount}% off no boleto
        </p>
      </section>
      <button>
        Comprar
      </button>
    </Container>
  );
}

export default Cards;
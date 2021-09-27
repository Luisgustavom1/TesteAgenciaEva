import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 23.6rem;
    height: 40.5rem;

    border-radius: .4rem;

    padding-bottom: 1.6rem;
    margin-bottom: 6.4rem;

    text-align: center;

    overflow: hidden;

    background-color: ${theme.bwWhite1};
    border: 1px solid transparent;

    @keyframes growthCard {
      to { 
        height: 45.2rem; 
        border: 1px solid ${theme.brandPrimary};
      }
    }

    &:hover {
      animation: growthCard 250ms ease-in forwards;
      button {
        opacity: 1;
      }
    }

    .containerImg {
      background-color: ${theme.bwWhite};

      display: flex;
      justify-content: center;

      img {
        width: auto;
        height: 23.6rem;
      }
    }

    .containerName {
      height: 3.5rem;
      max-width: 19rem;

      margin: .8rem auto;

      display: flex;
      justify-content: center;
    }

    .nameOfProduct {
      font-size: 1.4rem;
      font-weight: 300;

      text-align: left;
    }


    .containerStars {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: .2rem;

      margin-bottom: .8rem;  
    }
          
    .stars {
      width: 1.46rem;
      height: 1.4rem;
    }

    .oldPrice {
      color: ${theme.bwBlack2};

      font-size: 1.2rem;
      text-align: right;

      padding-right: 5.4rem;

      text-decoration: line-through;
    }
      
    .currentPrice {
      font-size: 3.2rem;
      font-weight: 700;

      color: ${theme.brandPrimary};
    }

    .discount {
      font-size: 1rem;
    }
  
    button {
      background-color: ${theme.brandPrimary};
      color: white;

      font-size: 1.6rem;

      width: 22rem;
      height: 4.2rem;

      border-radius: .8rem;

      margin: 1.6rem auto 0 auto;

      opacity: 0; 
      transition: opacity 250ms;

      cursor: pointer;
      &:hover {
        filter: brightness(.9)
      }
    }

    @media(max-width: 768px) {
      height: 45.2rem; 

      button {
        opacity: 1;
      }
    }
  `}
`;

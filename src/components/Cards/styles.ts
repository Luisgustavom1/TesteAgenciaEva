import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 23.6rem;
    height: 40.5rem;

    border-radius: .4rem;

    padding-bottom: 1.6rem;
    margin-bottom: 6.4rem;

    text-align: center;

    background-color: ${theme.bwWhite1};

    > img {
      width: 100%;
      height: 23.6rem;
    }

    section {
      padding: 0 2.6rem;

      h2 {
        font-size: 1.4rem;
        font-weight: 300;

        margin: .8rem 0;
        text-align: left;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .2rem;

        margin-bottom: .8rem;  
        img {
          width: 1.4rem;
        }
      }

      .oldPrice {
        color: ${theme.bwBlack2};
        font-size: 1.2rem;
        text-align: right;
        text-decoration: line-through;
      }
      
      h3 {
        font-size: 3.2rem;
        font-weight: 700;

        color: ${theme.brandPrimary};
      }

      p {
        font-size: 1rem;
      }
    }

    button {
      background-color: ${theme.brandPrimary};
      color: white;

      font-size: 1.6rem;

      width: 22rem;
      height: 4.2rem;

      border-radius: .8rem;

      margin: 1.6rem auto 0 auto;

      display: none;

      &:hover {
        filter: brightness(.9)
      }
    }

    &:hover {
      border: .1rem solid ${theme.brandPrimary};
      height: auto;

      button {
        display: block;
      }
    }
  `}
`;

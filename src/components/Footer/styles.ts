import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100vw;

    background-color: ${theme.bwBlack};
    color: ${theme.bwWhite};
    font-weight: 300;
    
    padding: 3.2rem 0 3.2rem 10vw;

    h1 {
      color: ${theme.brandPrimary};
      font-size: 2.4rem;
    }

    span {
      display: flex;

      width: 10rem;
      height: .4rem;
      
      background-color: ${theme.bwWhite};

      margin-bottom: 1.8rem;
    }

    .mainSvg {
      width: 2.165rem;
      height: 1.8rem;
    }

    section {
      display: flex;
      flex-wrap: wrap;
      gap: 10rem;

      div:first-child {
        p {
          cursor: pointer;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        &:first-child {
          font-weight: 400;
        }

        .secondSvg{
          width: 1.5rem;
          margin-right: .8rem;
        }
      }
    }
  `}
`;

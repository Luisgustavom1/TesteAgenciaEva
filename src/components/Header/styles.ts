import styled, { css } from 'styled-components';

interface ContainerProps {
  showMenu: boolean
}

export const Container = styled.header<ContainerProps>`
  ${({ theme, showMenu }) => css`
    width: 100vw;

    background-color: ${theme.bwBlack};

    padding: 1.6rem 16.4rem;

    display: flex;
    justify-content: space-between;

    > div {
      width: 90%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      transition: 500ms ease-in-out;

      font-weight: 300;
      color: ${theme.bwWhite};
    }

    .logo {
      height: 3.2rem;
      width: 8rem;

      margin-right: 9.4rem;
    }

    img {
      height: 1.6rem;
      width: 1.4rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: .8rem;

      & + span:hover {
        filter: brightness(.8);
      }
    }

    .menuHamburguer {
      display: none;
    }

    @media(max-width: 1050px) {
      padding: 1.6rem 10.4rem;
    }

    @media(max-width: 900px) {
      padding: 1.6rem 3rem;
    }

    @media(max-width: 730px) {      
      > div {
        flex-direction: column;
        justify-content: flex-start;

        gap: 5rem;

        padding-top: 5rem;

        position: absolute;
        z-index: 1;
        visibility: ${showMenu ? 'visible' : 'hidden'};
        overflow-y: hidden;

        top: 6.4rem;
        right: 0;

        width: 70%;
        height: ${showMenu ? 'calc(100vh - 6.4rem)' : '0'};

        background-color: ${showMenu && theme.bwBlack2};

        font-weight: 400;
        font-size: 1.8rem;
        span {
          order: 1;        
        }
      }

      .menuHamburguer {
        display: block;
      } 
    }
  `}
`;

export const Busca = styled.div`
  width: 37%;
  min-width: 22rem;
  height: 3.2rem;

  background-color: ${({ theme }) => theme.bwWhite};

  border-radius: .5rem;

  padding: 0 1rem;

  display: flex;
  align-items: center;

  input {
    width: 92%;
    outline: none;
  }
`;

export const ContainerDropdown = styled.span`
  ${({ theme }) => css`
    &:hover ul{
      transform: rotateX(0);
      opacity: 1;
    }
    
    nav {
      color: ${theme.bwBlack};
      position: relative;

      ul {
        position: absolute;
        z-index: 999;

        right: 50%;
        top: 2rem;
        
        opacity: .25;
        
        transition: all 150ms ease-in;
        transform: rotateX(-90deg);
        transform-origin: top center;

        li {
          padding: .8rem 1.6rem;

          background-color: ${theme.bwWhite};
          
          &:hover {
            background-color: ${theme.bwWhite2};
          }

          & + li {
            border-top: 1px solid #DADFEB;
          }

          &:first-child {
            border-radius: .4rem .4rem 0 0;
          }

          &:last-child {
            border-radius: 0 0 .4rem .4rem;
          }
        }
      }
    }
  `}
`;
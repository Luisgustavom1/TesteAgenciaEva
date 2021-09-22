import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;

  background-color: ${({ theme }) => theme.bwBlack};
  color: ${({ theme }) => theme.bwWhite};

  padding: 1.6rem 16.4rem;

  font-weight: 300;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img:first-child {
    height: 3.2rem;
    width: 8rem;
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
`;

export const Busca = styled.span`
  width: 37%;
  height: 3.2rem;

  background-color: ${({ theme }) => theme.bwWhite};

  padding: 0 1rem;

  input {
    width: 92%;
    outline: none;
  }
`;

export const ContainerDropdown = styled.span`
  &:hover ul{
    transform: rotateX(0);
    opacity: 1;
  }
  
  div {
    color: ${({ theme }) => theme.bwBlack};
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

        background-color: ${({ theme }) => theme.bwWhite};
        
        &:hover {
          background-color: ${({ theme }) => theme.bwWhite2};
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
`;
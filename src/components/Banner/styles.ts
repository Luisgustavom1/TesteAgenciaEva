import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface ContainerProps {
  banner: string
}

export const Container = styled.section<ContainerProps>`
  ${(props) => css`
    width: 100vw;
    height: 38rem;

    position: relative;

    &:after {
      content: '';

      width: 106%;
      height: 111%;

      background: 
        repeat 
        linear-gradient(90.99deg, #000000 1.53%, rgba(32, 32, 32, 0.52) 56.83%, rgba(196, 196, 196, 0) 98.06%),
        url(${props.banner}) 
        0 25%;
      background-size: cover;

      position: absolute;
      top: -10%;
      left: -5%;
      z-index: -1;

      transform: rotate(-3deg);
    }

    aside {
      color: ${theme.bwWhite};
      
      padding: 12.6rem 20rem;

      height: 100%;

      h1 {
        font-size: 4.2rem;
      }
      p {
        font-size: 2.4rem;
      }

      div {
        display: grid;
        place-items: center;

        margin-top: 13%;

        input {
        position: relative;

        &:checked:after{
          content: '';
          z-index: 999;
  
          width: 100%;
          height: 100%;
  
          background: ${theme.brandPrimaryLight};
          
          position: absolute;
          top: 0;
          right: 0;
          border-radius: 50%;
        }

        & + input {
          margin-left: .8rem;
        }
      }
      }
    }
  `}
`;
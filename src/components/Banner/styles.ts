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

    background: 
      repeat 
      linear-gradient(90.99deg, #000000 1.53%, rgba(32, 32, 32, 0.52) 56.83%, rgba(196, 196, 196, 0) 98.06%),
      url(${props.banner}) 
      0% 40% / cover
      no-repeat;

    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  `}
`;

export const AsideStyle = styled.aside`
  height: 100%;

  color: ${theme.bwWhite};
  
  padding: 12.6rem 15%;
    
  margin: 0 auto;
  h1 {
    font-size: 4.2rem;
  }

  p {
    font-size: 2.4rem;
  }

  
`;

export const CountBanner = styled.span`
  display: flex;
  justify-content: center;

  margin-top: -8vh;

  input {
    position: relative;

    &:checked:after{
      content: '';
      z-index: 1;

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
`;

// background:
//    url(sweettexture.jpg)    /* image */
//    top center / 200px 200px /* position / size */
//    no-repeat                /* repeat */
//    fixed                    /* attachment */
//    padding-box              /* origin */
//    content-box              /* clip */
//    red;                     /* color */
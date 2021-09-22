import styled from 'styled-components';

interface ContainerProps {
  background: string
}

export const Container = styled.div<ContainerProps>`
  min-width: 23rem;
  height: 25.6rem;

  background:  linear-gradient(22.05deg, rgba(0, 0, 0, 0.5) 14.41%, rgba(73, 73, 73, 0.5) 57.21%, rgba(255, 255, 255, 0) 100%), url(${({ background }) => background}) center / cover no-repeat;
  
  color: ${({ theme }) => theme.bwWhite};

  font-size: 3.2rem;
  font-weight: 700;

  text-align: center;

  p {
    padding-top: 90%;
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
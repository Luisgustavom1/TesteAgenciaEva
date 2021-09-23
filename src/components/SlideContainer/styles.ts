import styled from 'styled-components';

interface ContainerProps {
  numberOfSlides: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.3rem;

  margin: 10rem auto;

  > div {
    display: flex;
    gap: 3.2rem;

    overflow-x: hidden;
    
    width: calc(23.6rem * 4 + calc(3.2rem * (4 - 1)));
    div {
      transition: transform 500ms ease-in-out;
      transform: ${({ numberOfSlides }) => `translateX(${numberOfSlides * (23.6 + 3.2) }rem)`};

      flex: none;
    }
  }

  > img:hover {
    transform: scale(1.1);
  }

  @media(max-width: 1150px) {
    > div {
      width: calc(23.6rem * 3 + calc(3.2rem * (3 - 1)));
    }
  }
  @media(max-width: 900px) {
    > div {
      width: calc(23.6rem * 2 + calc(3.2rem * (2 - 1)));
    }
  }
  @media(max-width: 620px) {
    > div {
      width: calc(23.6rem * 1 + calc(3.2rem * (1 - 1)));
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  width: 80vw;

  display: flex;
  justify-content: space-between;
  
  margin: 0 auto;

  @media(max-width: 890px) {
    flex-direction: column;
    align-items: center;

    gap: 5rem;

    div {
      width: 30rem;
      height: auto;
    }
  }
`;
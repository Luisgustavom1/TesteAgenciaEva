import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 16.4rem;

  width: 100vw;

  display: flex;
  justify-content: center;

  div + div {
    margin-left: 15%;
  }

  @media(max-width: 900px) {
    div + div {
      margin-left: 5%;
    }
  }

  @media(max-width: 750px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
    
    div + div {
      margin-left: 0;
    }
  }
`;
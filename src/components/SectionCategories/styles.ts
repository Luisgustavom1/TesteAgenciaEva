import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  
  padding: 0 15.5%;

  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;

    gap: 5rem;
  }
`;
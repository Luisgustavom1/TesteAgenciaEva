import styled from 'styled-components';

export const Container = styled.section`

  display: flex;
  justify-content: center;
  gap: 12%;
  
  margin: 0 auto;

  @media(max-width: 890px) {
    flex-direction: column;
    align-items: center;

    gap: 5rem;
  }
`;
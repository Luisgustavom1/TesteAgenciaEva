import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  color: ${({ theme }) => theme.brandPrimary};

  padding: 7rem 2rem;

  span {
    content: '';
    
    background: #DADFEB;

    width: .1rem;
    height: 7.7rem;
  }

  div {
    text-align: center;

    img {
      width: 5rem;
    }
  }
 
  @media(max-width: 500px) {
    gap: 3rem;
  }

  @media(max-width: 380px) {
    gap: 1.5rem;
  }
`;

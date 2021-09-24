import styled from 'styled-components';

export const Container = styled.section`
  width: 80vw;
  
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6rem;

  color: ${({ theme }) => theme.brandPrimary};

  margin: 7rem auto;
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
 
  @media(max-width: 600px) {
    gap: 3rem;
  }

  @media(max-width: 430px) {
    gap: 1.5rem;
  }
`;

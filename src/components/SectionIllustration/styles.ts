import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  color: ${({ theme }) => theme.brandPrimary};

  margin-top: 7rem;

  div {
    text-align: center;

    img {
      width: 5rem;
    }
  }
  span {
    content: '';
    background: #DADFEB;
    width: .1rem;
    height: 7.7rem;
  }
`;

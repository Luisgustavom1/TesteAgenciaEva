import styled from 'styled-components';

export const Container = styled.div`
  margin: 6.4rem 0rem;

  > section {
    padding: 0 0 4.2rem 23vw;

    span {
      display: flex;

      width: 6.4rem;
      height: .1rem;

      background-color: ${({ theme }) => theme.brandPrimary};
    }
  }

  
`;

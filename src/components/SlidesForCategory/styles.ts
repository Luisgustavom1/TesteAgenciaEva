import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  margin: 6.4rem auto 0 auto;

  > div {
    padding-bottom: 4.2rem;

    width: 80vw;

    margin: 0 auto;
    span {
      display: flex;

      width: 6.4rem;
      height: .6rem;

      background-color: ${({ theme }) => theme.brandPrimary};
    }
  }

  
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  margin: 6.4rem auto 0 auto;

  > div {
    padding: 0 0 4.2rem 15.5%;

    h1 {
      font-size: 2.4rem;
    }
    span {
      display: flex;

      width: 6.4rem;
      height: .8rem;

      background-color: ${({ theme }) => theme.brandPrimary};
    }
  }
`;

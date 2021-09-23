import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.bwBlack2};

  display: grid;
  place-items: center;
  gap: 4.8rem;

  padding: 4.8rem 0;
  
  img {
    width: 4rem;
  }

  section {
    text-align: center;

    p {
      font-size: 2.4rem;
      margin-top: 1.5rem;

      color: ${({ theme }) => theme.bwWhite};
    }
  }

  button {
    width: 266px;
    height: 42px;
    
    border-radius: .8rem;

    background-color: ${({ theme }) => theme.brandPrimary};
    color: ${({ theme }) => theme.bwWhite};
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.8rem;
  
  label {
    position: absolute;
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    padding: 1rem 17.2rem .6rem .5rem;
    outline: none;
    border-radius: .4rem;
  }
`;
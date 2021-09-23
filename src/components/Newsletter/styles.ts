import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.bwBlack2};

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

        color: ${theme.bwWhite};
      }
    }

  `}
`;

export const FormStyle = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;

    div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.8rem;
    }

    label {
      position: absolute;
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      border-width: 0;
    }

    button {
      width: 266px;
      height: 42px;
      
      border-radius: .8rem;

      background-color: ${theme.brandPrimary};
      color: ${theme.bwWhite};

      &:hover {
        background-color: ${transparentize(0.2, theme.brandPrimary)};
      }
    }
  `}
`;
 
interface InputStyleProps {
  isEmpty: boolean
}

export const InputStyle = styled.input<InputStyleProps>`
  width: 27.8rem;
  padding: 1rem .5rem .6rem .5rem;

  outline: none;
  border-radius: .4rem;
  border: .2rem solid ${({ isEmpty, theme }) => isEmpty ? theme.brandPrimary : 'none'};

  &::placeholder {
    color: ${({ isEmpty, theme }) => isEmpty ? theme.brandPrimary : theme.bwBlack2};
  }
`
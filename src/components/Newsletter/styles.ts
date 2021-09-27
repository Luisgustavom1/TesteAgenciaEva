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
    margin-top: 4rem;
    
    svg {
      width: 5.4rem;
      height: 4.2rem;
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
      width: 26.6rem;
      height: 4.2rem;
      
      border-radius: 8px;

      background-color: ${theme.brandPrimary};
      color: ${theme.bwWhite};

      cursor: pointer;
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
  padding: 10px 5px 6px 5px;

  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${({ isEmpty, theme }) => isEmpty ? theme.brandPrimary : 'none'};

  user-select: none;
  &::placeholder {
    color: ${({ isEmpty, theme }) => isEmpty ? theme.brandPrimary : theme.bwBlack2};
  }
`
import styled from 'styled-components';

interface ContainerProps {
  background: string
}

export const Container = styled.div<ContainerProps>`
  width: 23rem;
  height: 25.6rem;

  background:  linear-gradient(22.05deg, rgba(0, 0, 0, 0.5) 14.41%, rgba(73, 73, 73, 0.5) 57.21%, rgba(255, 255, 255, 0) 100%), url(${({ background }) => background}) center / cover no-repeat;
  color: ${({ theme }) => theme.bwWhite};

  font-size: 3.2rem;
  font-weight: 700;

  text-align: center;

  border-radius: 4px;
  p {
    padding-top: 90%;
    user-select: none;
  }
`;


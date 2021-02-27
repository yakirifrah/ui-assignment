import styled from 'styled-components/macro';

export const ContainerBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  &:active {
    .arrow {
      transform: rotateZ(-90deg);
    }
  }
`;

export const WrapperBurger = styled.div`
  div {
    width: 2rem;
    height: 0.3125rem;
    background-color: #0e1a35;
    margin: 0.375rem 0;
    cursor: pointer;
    z-index: 10;
  }
`;

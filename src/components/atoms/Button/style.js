import styled from 'styled-components/macro';

export const ButtonWrapper = styled.button`
  background-color: #5584ff;
  border-radius: 1.5rem;
  padding: 0.875rem 2.625rem;
  outline: none;
  border: none;
  span {
    color: #ffffff;
    font-weight: 500;
    font-size: 1.125rem;
    font-family: 'Roboto', serif;
    &:before {
      content: '+ ';
    }
  }
`;

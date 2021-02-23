import styled from 'styled-components/macro';

export const ButtonWrapper = styled.button`
  background-color: #5584ff;
  border-radius: 24px;
  padding: 14px 42px;
  outline: none;
  border: none;
  span {
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    font-family: 'Roboto', serif;
    &:before {
      content: '+ ';
    }
  }
`;

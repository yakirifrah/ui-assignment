import styled from 'styled-components/macro';

export const AppWrapper = styled.div`
  padding-top: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 470px) {
    padding: 0.7rem;
  }
`;

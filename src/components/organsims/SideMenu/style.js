import styled, { css } from 'styled-components/macro';

export const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 96vh;
  flex-basis: 20%;
  width: 30%;
  box-sizing: border-box;
  background-color: #0e1a35;
  ${(props) =>
    props.open &&
    css`
      flex-basis: 0;
      width: 4%;
    `}
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoAppWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
  height: 9rem;
  width: 11rem;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  ${(props) =>
    props.open &&
    css`
      padding-left: 8px;
    `}
`;

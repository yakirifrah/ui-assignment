import styled from 'styled-components/macro';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: inherit;
  padding: 9px;
  border-bottom: 1px solid rgba(132,146,175,0.3);
  border-right: 1px solid rgba(132,146,175,0.3);
  box-shadow: 0 5px 4px -6px #202124;
  z-index: 13;
  background-color: #ffffff;
  height: 5vw;
  display: grid;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerGroup1 = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
export const ContainerGroup2 = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 2rem;
  }
  svg {
    margin-left: 2rem;
  }
  .MuiAvatar-root {
    margin-left: 2rem;
  }
`;

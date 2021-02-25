import styled from 'styled-components/macro';

export const DropDownWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 204px;
  height: 49px;
  border-radius: 24px;
  background-color: rgba(255, 58, 118, 0);
  border: 1px solid rgba(132, 146, 175, 0.3);
  .content {
    margin-left: 1.5em;
  }
  .period {
    font-size: 14px;
    line-height: 14px;
    color: #8492af;
    font-weight: 400;
    font-family: 'Roboto', serif;
  }
  .last-year {
    font-size: 14px;
    line-height: 14px;
    color: black;
    font-weight: bold;
    font-family: 'Roboto', serif;
  }
  .arrowIcon {
    position: absolute;
    right: 21px;
  }
`;

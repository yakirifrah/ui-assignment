import styled from 'styled-components/macro';

export const DropDownWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: 12.75rem;
  max-height: 3.0625rem;
  border-radius: 1.5rem;
  background-color: rgba(255, 58, 118, 0);
  border: 1px solid rgba(132, 146, 175, 0.3);
  .content {
    margin-left: 1.5em;
  }
  .period {
    font-size: 0.875rem;
    line-height: 0.875rem;
    color: #8492af;
    font-weight: 400;
    font-family: 'Roboto', serif;
  }
  .last-year {
    font-size: 0.875rem;
    line-height: 0.875rem;
    color: black;
    font-weight: bold;
    font-family: 'Roboto', serif;
  }
  .arrowIcon {
    position: absolute;
    right: 1.3125rem;
  }
`;

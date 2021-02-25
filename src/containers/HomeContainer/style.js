import styled from 'styled-components/macro';

export const HomeWrapper = styled.div`
  display: flex;
  height: -webkit-fill-available;
  background-color: #f6f7fa;
`;

export const HomeContainer = styled.div`
  width: -webkit-fill-available;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 28px;
  .donut-cart {
    width: 85%;
  }
  .line-chart {
    width: 531px;
    height: auto;
    margin-top: 8px;
    margin-left: 11px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 13px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StripesContainer = styled.div`
  display: grid;
  grid-template-areas:
    'StripeCharts'
    'StripeLists';
  grid-row-gap: 1rem;
`;
export const StripeCharts = styled.div`
  display: flex;
  justify-content: space-between;
`;
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
export const StripeLists = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

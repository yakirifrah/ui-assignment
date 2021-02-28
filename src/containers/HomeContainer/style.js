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
    object-fit: cover;
    max-width: 80%;
  }
  .line-chart {
    width: 28.1875rem;
    height: auto;
    margin-top: 8px;
    margin-left: 11px;
  }
  .left-task-badge,
  .delay-task-badge {
    margin-left: 0.75rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 0.8125rem;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0.375rem;
  position: relative;
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
  width: 12.75rem;
  height: 3.0625rem;
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
export const StripeLists = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderListWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 20%;
  padding: 1rem;
`;
export const NumberAvatarWrapper = styled.div`
  display: flex;
`;

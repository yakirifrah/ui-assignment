import styled from 'styled-components/macro';

export const ActivityWrapper = styled.li`
  list-style: none;
  display: flex;
  padding: 1rem;
  position: relative;
  align-items: center;
  .vl {
    width: 0.2px;
    background: lightgray;
    height: 31px;
    position: absolute;
    left: 50%;
  }
  &:last-child {
    .vl {
      background: transparent;
    }
  }
`;
export const ProfilePhotoWrapper = styled.div`
  position: relative;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .activity-detail {
    display: flex;
    align-items: center;
  }
  .time {
    margin-left: 2px;
    color: #8492af;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  .type {
    margin-left: 0.3125rem;
    font-size: 0.875rem;
    color: #a2acc2;
    font-weight: 500;
    font-family: 'Roboto', serif;
  }
`;

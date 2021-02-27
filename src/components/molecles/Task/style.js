import styled from 'styled-components/macro';

export const TaskWrapper = styled.li`
  list-style: none;
  display: flex;
  padding: 1rem;
  position: relative;
  align-items: center;
  border-bottom: 1px solid lightgray;

  &:first-child {
    border-bottom: 1px solid lightgray;
  }
  &:last-child {
    border-bottom: none;
  }
  .collapse {
    position: absolute;
    right: 1.25rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  .task-details {
    display: flex;
    .text {
      font-size: 0.875rem;
      line-height: 17px;
      font-weight: 400;
      font-family: 'Roboto', serif;
      margin-left: 2px;
    }
    .delay {
      color: #f83c7b;
    }
    .left {
      color: #8492af;
    }
  }
`;

export const ThumbnailNameWrapper = styled.div``;

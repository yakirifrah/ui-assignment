import styled from 'styled-components/macro';

export const MessageWrapper = styled.li`
  list-style: none;
  display: flex;
  padding: 0.75rem;
  position: relative;
  align-items: center;
  border-bottom: 1px solid lightgray;

  &:first-child {
    border-bottom: 1px solid lightgray;
  }
  &:last-child {
    border-bottom: none;
  }
  .icons {
    .back {
      margin-right: 8px;
    }
  }
`;

export const ThumbnailProfile = styled.div`
  margin-right: 1.25rem;
`;

export const ContentMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  .time {
    margin-left: 0.3125rem;
    font-size: 0.875rem;
    color: #a2acc2;
    font-weight: 500;
    font-family: 'Roboto', serif;
  }
`;

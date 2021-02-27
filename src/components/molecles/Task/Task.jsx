import { Typography, Avatar, Icon } from '../../atoms';
import * as S from './style';
const Task = ({ content, days, delay = true }) => {
  return (
    <S.TaskWrapper>
      <S.ThumbnailNameWrapper>
        <Avatar.Letter letter={content.substring(0, 1)} size="small" />
      </S.ThumbnailNameWrapper>
      <S.ContentWrapper>
        <div className="task-description">
          <Typography.UppercaseText>{content}</Typography.UppercaseText>
        </div>
        <div className="task-details">
          {delay && (
            <>
              <Icon name="clockDelay" folder="app" />
              <span className="delay text">{days} days delays</span>
            </>
          )}
          {!delay && (
            <>
              <Icon name="clockLeft" folder="app" />
              <span className="left text">{days} days left</span>
            </>
          )}
        </div>
      </S.ContentWrapper>
      <div className="collapse">
        <Icon name="options" folder="app" />
      </div>
    </S.TaskWrapper>
  );
};
export default Task;

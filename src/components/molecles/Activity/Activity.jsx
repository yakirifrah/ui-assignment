import * as S from './style';
import { Avatar, Icon, Typography } from '../../atoms';
const Activity = ({ name, type, content, time }) => {
  return (
    <S.ActivityWrapper>
      <S.ProfilePhotoWrapper>
        <Avatar.ProfilePhoto name={name} />
        <div className="vl"></div>
      </S.ProfilePhotoWrapper>
      <S.ContentWrapper>
        <S.Header>
          <Typography.SubtitleText>{name}</Typography.SubtitleText>
          <span className="type">{type}</span>
          <Typography.SubtitleText>{content}</Typography.SubtitleText>
        </S.Header>
        <div className="activity-detail">
          <Icon name="clockLeft" folder="app" />
          <span className="time">{time}</span>
        </div>
      </S.ContentWrapper>
    </S.ActivityWrapper>
  );
};
export default Activity;

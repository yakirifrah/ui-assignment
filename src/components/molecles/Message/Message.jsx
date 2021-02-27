import * as S from './style';
import { Avatar, Typography, Icon } from '../../atoms';
const Message = ({ name, content, time }) => {
  return (
    <S.MessageWrapper>
      <S.ThumbnailProfile>
        <Avatar.ProfilePhoto name={name} />
      </S.ThumbnailProfile>
      <S.ContentMessage>
        <S.Header>
          <Typography.SubtitleText>{name}</Typography.SubtitleText>
          <div className="time">{time}</div>
        </S.Header>
        <Typography.SubtitleText>{content}</Typography.SubtitleText>
        <div className="icons">
          <span className="back">
            <Icon name={'back'} folder={'messages'} />
          </span>
          <Icon name={'options'} folder={'messages'} />
        </div>
      </S.ContentMessage>
    </S.MessageWrapper>
  );
};
export default Message;

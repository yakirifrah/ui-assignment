import * as S from './style';
import { Typography } from '../../atoms';
import { Message } from '../../molecles';
import React from 'react';

const ListMessage = ({ messages }) => {
  return (
    <S.WrapperListMessage>
      {messages.length > 0 &&
        React.Children.toArray(
          messages.map(({ name, content, time }) => <Message name={name} content={content} time={time} />)
        )}
      {messages.length === 0 && <Typography.SmallText>no messages!!</Typography.SmallText>}
    </S.WrapperListMessage>
  );
};
export default ListMessage;

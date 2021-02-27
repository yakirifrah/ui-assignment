import * as S from './style';
import React from 'react';
import { Activity } from '../../molecles';
import { Typography } from '../../atoms';

const ListActivity = ({ activities }) => {
  return (
    <S.WrapperListActivity>
      {activities.length > 0 &&
        React.Children.toArray(
          activities.map(({ name, type, content, time }) => (
            <Activity name={name} content={content} type={type} time={time} />
          ))
        )}
      {activities.length === 0 && <Typography.SmallText>no messages!!</Typography.SmallText>}
    </S.WrapperListActivity>
  );
};

export default ListActivity;

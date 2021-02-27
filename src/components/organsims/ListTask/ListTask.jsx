import * as S from './style';
import { Task } from '../../molecles';
import { Typography } from '../../atoms';
import React from 'react';
const ListTask = ({ delayTasks = {}, leftTasks = {} }) => {
  const renderTask = () => {
    const { listOfDelayTasks } = delayTasks;
    const { listOfLeftTasks } = leftTasks;
    if (listOfDelayTasks.length && listOfLeftTasks.length) {
      const concatLists = listOfDelayTasks.concat(listOfLeftTasks);
      return React.Children.toArray(
        concatLists.map(({ content, days, delay }) => {
          return <Task content={content} delay={delay} days={days} />;
        })
      );
    } else if (listOfDelayTasks.length && !listOfLeftTasks.length) {
      return React.Children.toArray(
        listOfDelayTasks.map(({ content, days, delay }) => {
          return <Task content={content} delay={delay} days={days} />;
        })
      );
    } else if (listOfLeftTasks.length && !listOfDelayTasks.length) {
      return React.Children.toArray(
        listOfLeftTasks.map(({ content, days, delay }) => {
          return <Task content={content} delay={delay} days={days} />;
        })
      );
    } else {
      return <Typography.SmallText>No tasks!!</Typography.SmallText>;
    }
  };

  return <S.WrapperListTask>{renderTask()}</S.WrapperListTask>;
};

export default ListTask;

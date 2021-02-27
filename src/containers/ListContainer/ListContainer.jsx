import { Avatar, Card, Typography } from '../../components/atoms';
import * as S from './style';
import { Divider } from '@material-ui/core';
import { ListTask, ListMessage ,ListActivity} from '../../components/organsims';

const ListContainer = ({ name, tasks, messages,activities }) => {
  const renderContentList = (name) => {
    switch (name) {
      case 'tasks':
        const { leftTasks, delayTasks } = tasks;
        return (
          <>
            <S.HeaderListWrapper>
              <Typography.MediumText>{name}</Typography.MediumText>
              <S.NumberAvatarWrapper>
                {leftTasks.listOfLeftTasks.length && (
                  <div className="left-task-badge">
                    <Avatar.Number type="primary" num={leftTasks.number} />
                  </div>
                )}
                {delayTasks.listOfDelayTasks.length && (
                  <div className="delay-task-badge">
                    <Avatar.Number type="secondary" num={delayTasks.listOfDelayTasks.length} />
                  </div>
                )}
              </S.NumberAvatarWrapper>
            </S.HeaderListWrapper>
            <Divider />
            <ListTask delayTasks={delayTasks} leftTasks={leftTasks} />
          </>
        );
      case 'messages':
        return (
          <>
            <S.HeaderListWrapper>
              <Typography.MediumText>{name}</Typography.MediumText>
              <S.NumberAvatarWrapper>
                <div className="left-task-badge">
                  <Avatar.Number type="primary" num={'2'} />
                </div>
              </S.NumberAvatarWrapper>
            </S.HeaderListWrapper>
            <Divider />
            <ListMessage messages={messages} />
          </>
        );
        case 'activities':
            return(
                <>
                    <S.HeaderListWrapper>
                        <Typography.MediumText>{name}</Typography.MediumText>
                        <S.NumberAvatarWrapper>
                            <div className="left-task-badge">
                                <Avatar.Number type="primary" num={'10'} />
                            </div>
                        </S.NumberAvatarWrapper>
                    </S.HeaderListWrapper>
                    <Divider />
                    <ListActivity
                        activities={activities}
                    />
                </>
            )
      default:
        break;
    }
  };
  return (
    <>
      <Card width={30} height={38} padding={0}>
        {renderContentList(name)}
      </Card>
    </>
  );
};
export default ListContainer;

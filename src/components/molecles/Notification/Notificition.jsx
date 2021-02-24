import { Icon, Badge } from '../../atoms';
const Notification = ({ badgeContent }) => {
  return (
    <Badge badgeContent={badgeContent} type="notification">
      <Icon name="notifications" folder="topMenu" />
    </Badge>
  );
};

export default Notification;

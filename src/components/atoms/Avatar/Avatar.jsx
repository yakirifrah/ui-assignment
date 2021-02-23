import { Avatar as MatAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import profilePhoto from '../../../assets/icons/topMenu/profilePhoto.png';
const useStyles = makeStyles(() => ({
  medium: {
    width: '55px',
    height: '55px',
  },
}));

const Avatar = ({ AvatarName }) => {
  const classes = useStyles();
  return <MatAvatar alt={AvatarName} className={classes.medium} src={profilePhoto} />;
};
export default Avatar;

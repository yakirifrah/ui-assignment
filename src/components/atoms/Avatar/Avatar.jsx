import { Avatar as MatAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import profilePhoto from '../../../assets/icons/topMenu/profilePhoto.png';
import James_Smith from '../../../assets/img/James Smith.png';
import Nina_Johnson from '../../../assets/img/Nina Jones.png';
import Alexandra_Spears from '../../../assets/img/Alexandra Spears.png';
import Alex_Clooney from '../../../assets/img/Alex Clooney.png';

const useStyles = makeStyles((theme) => ({
  medium: {
    width: '3.375rem',
    height: '3.375rem',
  },
  small: {
    width: `2.25rem`,
    height: '2.25rem',
    backgroundColor: theme.palette.secondary.main,
  },
  primary: {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#5384FF',
  },
  secondary: {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#F83C7B',
  },
  profilePhoto: {
    width: '2.75rem',
    height: '2.75rem',
  },
}));

const Avatar = {
  Image: ({ AvatarName, size }) => {
    const classes = useStyles();
    return <MatAvatar alt={AvatarName} className={classes[`${size}`]} src={profilePhoto} />;
  },
  Letter: ({ letter }) => {
    const classes = useStyles();
    return <MatAvatar className={classes.small}>{letter}</MatAvatar>;
  },
  Number: ({ num, type }) => {
    const classes = useStyles();
    return <MatAvatar className={classes[`${type}`]}>{num}</MatAvatar>;
  },
  ProfilePhoto: ({ name }) => {
    const getSrc = () => {
      if (name === 'Nina Jones') return Nina_Johnson;
      if (name === 'James Smith') return James_Smith;
      if (name === 'Alexandra Spears') return Alexandra_Spears;
      if (name === 'Alex Clooney') return Alex_Clooney;
    };
    const classes = useStyles();
    return <MatAvatar alt={name} className={classes.profilePhoto} src={getSrc()} />;
  },
};

export default Avatar;

import { Badge as MtBadge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  notification: {
    backgroundColor: '#5584FF',
    color: '#FFFFFF',
  },
  primaryList: {
    backgroundColor: '#5584FF',
    color: '#FFFFFF',
    width: '2.8125rem',
    height: '2.8125rem',
    borderRadius: '50%',
    fontSize: `1.5rem`,
    fontWeight: `500`,
    fontFamily: `"Roboto"`,
  },
  secondaryList: {
    backgroundColor: '#f83c7b',
    color: '#FFFFFF',
    width: '2.8125rem',
    height: '2.8125rem',
    borderRadius: '50%',
    fontSize: `1.5rem`,
    fontWeight: `500`,
    fontFamily: `"Roboto"`,
  },
}));

const Badge = ({ badgeContent, type, children, restProps }) => {
  const classes = useStyles();
  return (
    <MtBadge classes={{ badge: classes[`${type}`] }} badgeContent={badgeContent} {...restProps}>
      {children}
    </MtBadge>
  );
};

export default Badge;

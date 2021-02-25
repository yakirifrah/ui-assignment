import { Card as MtCard, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Card = ({ children, ...restProps }) => {
  const { width, height } = restProps;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: `${width}%`,
      height: `${height}vh`,
    },
  }));
  const classes = useStyles();
  return (
    <MtCard variant="outlined" className={classes.root}>
      <CardContent>{children}</CardContent>
    </MtCard>
  );
};

export default Card;

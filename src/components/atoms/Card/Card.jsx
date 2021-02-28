import { Card as MtCard, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Card = ({ children, ...restProps }) => {
  const { width, height, padding = null } = restProps;

  const useStylesForMtCard = makeStyles(() => ({
    root: {
      width: `${width}%`,
      maxHeight: `${height}vh`,
      padding: 0,
    },
  }));
  const useStylesForCardContent = makeStyles(() => ({
    root: {
      padding: `${padding}`,
    },
  }));
  const classesForMtCard = useStylesForMtCard();
  const classesForCardContent = useStylesForCardContent();
  return (
    <MtCard variant="outlined" className={classesForMtCard.root}>
      <CardContent classes={{ root: classesForCardContent.root }}>{children}</CardContent>
    </MtCard>
  );
};

export default Card;

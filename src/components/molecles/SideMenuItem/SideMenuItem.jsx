import { Icon, Typography } from '../../atoms';
import * as S from './style';

const SideMenuItem = ({ label, icon, index, onClick, current }) => {
  const variant = current ? 'subtitle1' : 'subtitle2';
  const color = current ? '#ffffff' : '#C5C0E5';

  return (
    <S.SideMenuItemContainer active={current}>
      <S.SideMenuItemWrapper
        color={color}
        to={`/${label}`}
        onClick={() => {
          onClick(index);
        }}
      >
        <Icon name={icon} folder={'sideMenu'} />
        <Typography.SmallText variant={variant}>{label}</Typography.SmallText>
      </S.SideMenuItemWrapper>
    </S.SideMenuItemContainer>
  );
};

export default SideMenuItem;

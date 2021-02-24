import { useContext } from 'react';
import { Icon, Typography } from '../../atoms';
// import { Link } from 'react-router-dom';
import { SideMenuContext } from '../../../contexts/sideMenu/sideMenuContext';
import * as S from './style';

const SideMenuItem = ({ label, icon, index, onClick, current }) => {
  const variant = current ? 'subtitle1' : 'subtitle2';
  const color = current ? '#ffffff' : '#C5C0E5';
  const active = current;
  const { open, setOpen } = useContext(SideMenuContext);
  return (
    <S.SideMenuItemContainer active={active}>
      <S.SideMenuItemWrapper
        color={color}
        to={`/${label}`}
        onClick={() => {
          onClick(index);
          setOpen(!open);
        }}
      >
        <Icon name={icon} folder={'sideMenu'} />
        <Typography.SmallText variant={variant}>{label}</Typography.SmallText>
      </S.SideMenuItemWrapper>
    </S.SideMenuItemContainer>
  );
};

export default SideMenuItem;

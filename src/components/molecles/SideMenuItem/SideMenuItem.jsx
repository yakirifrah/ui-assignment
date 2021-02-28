import { Icon, Typography } from '../../atoms';
import {useContext} from 'react';
import { SideMenuContext} from '../../../contexts/sideMenu/sideMenuContext';
import * as S from './style';

const SideMenuItem = ({ label, icon, index, onClick, current }) => {
  const variant = current ? 'subtitle1' : 'subtitle2';
  const color = current ? '#ffffff' : '#C5C0E5';
    const {open} = useContext(SideMenuContext);
  return (
    <S.SideMenuItemContainer active={current} open={open}>
      <S.SideMenuItemWrapper
        color={color}
        open={open}
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

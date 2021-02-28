import { useState } from 'react';
import routes from '../../../constants/routes';
import { SideMenuItem } from '../../molecles';
import * as S from './style';
import { Icon } from '../../atoms';

const sideMenuRender = (currentIndex, setCurrentIndex) =>
  routes.map(({ label, icon }, index) => {
    return (
      <SideMenuItem
        key={index}
        index={index}
        onClick={setCurrentIndex}
        current={index === currentIndex}
        label={label}
        icon={icon}
      />
    );
  });

const SideMenu = ({ open }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <S.SideMenuWrapper open={open}>
      <S.LogoAppWrapper open={open}>
        <Icon name="logoApp" folder="app" />
      </S.LogoAppWrapper>
      <S.MenuItemsWrapper>{sideMenuRender(currentIndex, setCurrentIndex)}</S.MenuItemsWrapper>
    </S.SideMenuWrapper>
  );
};
export default SideMenu;

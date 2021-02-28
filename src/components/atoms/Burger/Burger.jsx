import arrow from '../../../assets/icons/topMenu/arrow.png';

import * as S from './style';
import {useContext} from "react";
import {SideMenuContext} from "../../../contexts/sideMenu/sideMenuContext";
const Burger = ( ) => {
    const { open,setOpen } = useContext(SideMenuContext);
    return (
    <S.ContainerBurger open={open} onClick={() => setOpen(!open)}>
      <div
        className="arrow"
        style={{
          backgroundImage: `url(${arrow})`,
          width: '0.4375rem',
          height: '0.8125rem',
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          marginRight: '0.5rem',
        }}
      />
      <S.WrapperBurger>
        <div />
        <div />
        <div />
      </S.WrapperBurger>
    </S.ContainerBurger>
  );
};
export default Burger;

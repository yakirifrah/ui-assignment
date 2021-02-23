import arrow from '../../../assets/icons/topMenu/arrow.png';
import * as S from './style';
const Burger = ({ open, setOpen }) => {
  return (
    <S.ContainerBurger>
      <div
        className="arrow"
        style={{
          backgroundImage: `url(${arrow})`,
          width: '7px',
          height: '13px',
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          marginRight: '8px',
        }}
      />
      <S.WrapperBurger open={open} setOpen={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.WrapperBurger>
    </S.ContainerBurger>
  );
};
export default Burger;

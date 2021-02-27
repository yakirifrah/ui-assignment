import arrow from '../../../assets/icons/topMenu/arrow.png';
import * as S from './style';
const Burger = ({ open, setOpen }) => {
  return (
    <S.ContainerBurger>
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
      <S.WrapperBurger open={open} setOpen={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.WrapperBurger>
    </S.ContainerBurger>
  );
};
export default Burger;

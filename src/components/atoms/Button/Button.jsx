import * as S from './style';
const Button = ({ label, onClick, type }) => {
  return (
    <S.ButtonWrapper type={type}>
      <span>{label}</span>
    </S.ButtonWrapper>
  );
};
export default Button;

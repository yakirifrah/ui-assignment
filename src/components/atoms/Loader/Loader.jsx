import spinner from '../../../assets/img/spinner.gif';
import * as S from './style';
const Loader = () => (
  <S.LoaderWrapper>
    <img src={spinner} alt="spinner" />
  </S.LoaderWrapper>
);

export default Loader;

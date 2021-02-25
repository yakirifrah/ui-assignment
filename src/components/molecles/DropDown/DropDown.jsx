import * as S from '../../../containers/HomeContainer/style';
import arrowDown from '../../../assets/icons/app/arrowDown.png';

const DropDown = () => (
  <>
    <S.DropDownWrapper>
      <div className="content">
        <span className="period">Period:</span>
        <span className="last-year"> Last Year</span>
      </div>

      <img className="arrowIcon" src={arrowDown} alt="arrow-down" />
    </S.DropDownWrapper>
  </>
);

export default DropDown;

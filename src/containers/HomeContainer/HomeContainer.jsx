import { useEffect, useContext } from 'react';
import { HomeTabContext } from '../../contexts/home/homeTabContext';
import { fetchDataForHomeTab } from '../../contexts/home/homeTabAction';
import { Typography, Card, Badge } from '../../components/atoms';
import { DropDown } from '../../components/molecles';
import Chart from '../../assets/img/cart-donut.png';
import ChratLine from '../../assets/img/chart-line.png';
import * as S from './style';

const HomeContainer = () => {
  const { dispatch, state } = useContext(HomeTabContext);
  const { data, loading, error } = state;
  useEffect(() => {
    fetchDataForHomeTab()(dispatch);
  }, []);

  return (
    <S.HomeWrapper>
      <S.HomeContainer>
        <S.TitleWrapper>
          <Typography.LargeText>Hello {data[0]?.name}!</Typography.LargeText>
        </S.TitleWrapper>
        <S.StripesContainer>
          <S.StripeCharts>
            <Card width={40} height={33}>
              <S.HeaderWrapper>
                <Typography.HeaderTextForChart>Your Sales</Typography.HeaderTextForChart>
                <DropDown />
              </S.HeaderWrapper>
              <img className="donut-cart" src={Chart} alt="chart" />
            </Card>
            <Card width={50} height={33}>
              <S.HeaderWrapper>
                <Typography.HeaderTextForChart>Report</Typography.HeaderTextForChart>
                <DropDown />
              </S.HeaderWrapper>
              <img className="line-chart" src={ChratLine} alt="chart" />
            </Card>
          </S.StripeCharts>
          <S.StripeLists>
            <Card width={30} height={38}>
              <S.HeaderListWrapper>
                <Typography.MediumText>Tasks</Typography.MediumText>
                {/*{ delayTasks?.listOfDelayTasks.length && <Badge type={'listPrimary'} badgeContent={listOfDelayTasks.length}/>}*/}
                {/*{leftTasks?.listOfLeftTasks.length && <Badge type={'listSecondary'} badgeContent={listOfLeftTasks.length}/>}*/}
              </S.HeaderListWrapper>
            </Card>
          </S.StripeLists>
        </S.StripesContainer>
      </S.HomeContainer>
    </S.HomeWrapper>
  );
};
export default HomeContainer;

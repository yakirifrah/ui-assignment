import React, { useEffect, useContext } from 'react';
import { HomeTabContext } from '../../contexts/home/homeTabContext';
import { fetchDataForHomeTab } from '../../contexts/home/homeTabAction';
import { Typography, Card, Loader } from '../../components/atoms';
import { DropDown } from '../../components/molecles';
import Chart from '../../assets/img/cart-donut.png';
import ChratLine from '../../assets/img/chart-line.png';
import ListContainer from '../ListContainer';
import * as S from './style';

const HomeContainer = () => {
  const { dispatch, state } = useContext(HomeTabContext);
  const { data, loading, error } = state;
  useEffect(() => {
    fetchDataForHomeTab()(dispatch);
  }, []);

  const renderHomeContent = () => {
    const { tasks, messages, activities } = data[0]['all-data'];
    return (
      <S.HomeContainer>
        <S.TitleWrapper>
          <Typography.LargeText>Hello {data[0]?.name}!</Typography.LargeText>
        </S.TitleWrapper>
        <S.StripesContainer>
          <S.StripeCharts>
            <Card width={40} height={29}>
              <S.HeaderWrapper>
                <Typography.HeaderTextForChart>Your Sales</Typography.HeaderTextForChart>
                <DropDown />
              </S.HeaderWrapper>
              <img className="donut-cart" src={Chart} alt="chart" />
            </Card>
            <Card width={50} height={29}>
              <S.HeaderWrapper>
                <Typography.HeaderTextForChart>Report</Typography.HeaderTextForChart>
                <DropDown />
              </S.HeaderWrapper>
              <img className="line-chart" src={ChratLine} alt="chart" />
            </Card>
          </S.StripeCharts>
          <S.StripeLists>
            {React.Children.toArray(
              Object.keys(data[0]['all-data']).map((listName) => (
                <ListContainer name={listName} tasks={tasks} messages={messages} activities={activities} />
              ))
            )}
          </S.StripeLists>
        </S.StripesContainer>
      </S.HomeContainer>
    );
  };

  return (
    <S.HomeWrapper>
      {loading && <Loader />}
      {!loading && !error.length && renderHomeContent()}
    </S.HomeWrapper>
  );
};
export default HomeContainer;

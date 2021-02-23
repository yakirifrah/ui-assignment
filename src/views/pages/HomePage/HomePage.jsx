import { useContext } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import * as S from './style';
import { SideMenu, TopMenu } from '../../../components/organsims';
import { SideMenuContext } from '../../../contexts/sideMenuContext';
import routes from '../../../config/route';
const HomePage = () => {
  const { open, setOpen } = useContext(SideMenuContext);
  return (
    <S.HomePageWrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <SideMenu open={true} setOpen={setOpen} />

        <S.MainContainer>
          <TopMenu />
        </S.MainContainer>
        {/*<Switch>*/}
        {/*    {routes.map((route, index) => {*/}
        {/*        return (*/}
        {/*            <Route*/}
        {/*                key={index}*/}
        {/*                path={route.path}*/}
        {/*                exact={route.exact}*/}
        {/*                render={(props) => (*/}
        {/*                    <route.component name={route.name} {...props} {...route.props} />*/}
        {/*                )}*/}
        {/*            />*/}
        {/*        );*/}
        {/*    })}*/}
        {/*</Switch>*/}
      </BrowserRouter>
    </S.HomePageWrapper>
  );
};

export default HomePage;

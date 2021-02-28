import { useContext } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as S from './style';
import { SideMenu, TopMenu } from '../../../components/organsims';
import { SideMenuContext } from '../../../contexts/sideMenu/sideMenuContext';
import routes from '../../../config/route';
const HomePage = () => {
  const { open } = useContext(SideMenuContext);
  return (
    <S.HomePageWrapper>
      <Router basename={process.env.PUBLIC_URL}>
        <SideMenu open={open} />
        <S.MainContainer open={open}>
          <TopMenu />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/Home" />;
              }}
            />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => {
                    return <route.component name={route.name} {...props} {...route.props} />;
                  }}
                />
              );
            })}
          </Switch>
        </S.MainContainer>
      </Router>
    </S.HomePageWrapper>
  );
};

export default HomePage;

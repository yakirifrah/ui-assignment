import { useContext } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as S from './style';
import { SideMenu, TopMenu } from '../../../components/organsims';
import { SideMenuContext } from '../../../contexts/sideMenu/sideMenuContext';
import routes from '../../../config/route';
const HomePage = () => {
  const { open, setOpen } = useContext(SideMenuContext);
  return (
    <S.HomePageWrapper>
      <Router basename={process.env.PUBLIC_URL}>
        <SideMenu open={open} setOpen={setOpen} />
        <S.MainContainer>
          <TopMenu />
          <Switch>
            {routes.map((route, index) => {
              console.log({ route });
              console.log({ index });
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => {
                    console.log({ props });
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

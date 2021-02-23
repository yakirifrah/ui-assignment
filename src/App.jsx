
import {Icon} from './components/atoms';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './config/route';
import {SideMenu} from './components/organsims';
import * as S from './style';
const App=()=>{
  return (
      <S.AppWrapper>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <SideMenu
                  open={true}
              />
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
      </S.AppWrapper>
  )
}

export default App;

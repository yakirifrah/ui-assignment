import { HomeTabProvider } from './home/homeTabProvider';
import { SideMenuProvider } from './sideMenu/sideMenuProvider';
const combineProviders = (providers) =>
  providers.reduce((Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ));

const Providers = combineProviders([SideMenuProvider, HomeTabProvider]);
export default Providers;

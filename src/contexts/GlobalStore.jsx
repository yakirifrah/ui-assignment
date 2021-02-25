import { HomeTabProvider } from './home/homeTabProvider';
import { SideMenuProvider } from './sideMenu/sideMenuProvider';
import { ThemeProvider } from './theme/themeProvider';
const combineProviders = (providers) =>
  providers.reduce((Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ));

const Providers = combineProviders([ThemeProvider, SideMenuProvider, HomeTabProvider]);
export default Providers;

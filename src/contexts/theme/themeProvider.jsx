import { ThemeProvider as MtThemeProvider } from '@material-ui/core';
import defaultTheme from '../../style/theme/theme';
export const ThemeProvider = ({ children }) => <MtThemeProvider theme={defaultTheme}>{children}</MtThemeProvider>;

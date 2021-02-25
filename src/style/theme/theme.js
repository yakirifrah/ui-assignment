import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  // palette: {
  //     primary: {
  //         main: '#000000',
  //     },
  //     secondary: {
  //         main: '#4cc1ef',
  //     },
  //     error: {
  //         main: '#ff000075',
  //     },
  //     text: {
  //         primary: '#808080 ',
  //         secondary: '#4cc1ef',
  //     },
  // },
  typography: {
    subtitle1: {
      lineHeight: 'normal',
      color: 'white',
    },
    subtitle2: {
      color: '#959095',
    },
    body2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontWeight: 'bold',
    },
    h1: {
      opacity: `1`,
      color: `#0E1A35`,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: '3rem',
      fontWeight: '500',
    },
    h5: {
      color: 'white',
      fontSize: '1.3rem',
      fontWeight: 600,
    },

    h2: {
      color: `#8492AF`,
      fontFamily: `"Roboto-Bold","AdobeInvitesFont","MyriadPro-Regular"`,
      fontSize: '2.25rem',
    },
    h3: {
      color: '#0E1A35',
      fontFamily: `'Roboto-Medium','AdobeInvisFont','MyriadPro-Regular'`,
      fontSize: `1.5rem`,
    },
  },
  card: {
    root: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
    },
  },
});

export default defaultTheme;

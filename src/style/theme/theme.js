import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#5384FF',
    },
    error: {
      main: '#F83C7B',
    },
    text: {
      primary: '#808080 ',
      secondary: '#4cc1ef',
    },
  },
  typography: {
    subtitle1: {
      lineHeight: 'normal',
      color: 'white',
    },
    subtitle2: {
      color: '#0E1A35',
      fontSize: '1.25rem',
      fontFamily: `'Roboto'`,
    },
    body2: {
      fontFamily: `'Roboto-Regular','AdobeInvisFont','MyriadPro-Regular'`,
      fontSize: `10px`,
    },
    body1: {
      fontSize: '0.875rem',
      color: `#0e1a35`,
      fontWeight: `500`,
      fontFamily: `Roboto`,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: `16.5875rem`,
    },
    h1: {
      opacity: `1`,
      color: `#0E1A35`,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: '2.75rem',
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
      fontFamily: `'Roboto'`,
      fontSize: `1.5rem`,
      fontWeight: '500',
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

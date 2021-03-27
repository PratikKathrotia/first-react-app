import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey, green } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[300],
    },
    success: {
      main: green[500],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '0 12px',
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      variant: 'contained',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

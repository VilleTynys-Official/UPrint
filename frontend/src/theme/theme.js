import { createMuiTheme } from '@material-ui/core';

/**
 * This is the base for all UI styling.
 * Here we can overwrite the default theme values of material-ui.
 *
 * App.js is wrapped in index.js with a provider that gives this theme to all components.
 */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4C586F'
    },
    secondary: {
      main: '#3E3E3B'
    }
  }
});

export default theme;

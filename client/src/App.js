import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import history from './Utilities/history';
import PrivateRoute from './Utilities/private-route';
import Home from './Home/Home';
import Chat from './Chat/Chat';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8858f0',
      main: '#6c02bd',
      dark: '#4f008c',
    },
    secondary: {
      light: '#ffd95a',
      main: '#f9a825',
      dark: '#c17900',
      contrastText: '#212121',
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Router history={history}>
          <Route path='/' exact component={Home} />
          <PrivateRoute path='/chat' component={Chat} />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import SearchInputs from './searchInputs.js';
import TripList from './trip/tripList.js';
import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FEDBD0',
      main: '#FEDBD0',
      dark: '#FEDBD0',
      contrastText: '#442C2E',
    },
    secondary: {
      light: '#442C2E',
      main: '#442C2E',
      dark: '#442C2E',
      contrastText: '#FEDBD0',
    },
    text: {
      primary: '#442C2E',
      secondary: '#442C2E',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Campfire</Typography>
      <Grid container>
        <Grid item xs={8}>
          <SearchInputs/>
        </Grid>
        <Grid item xs={4}>
          <TripList/>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
import React from 'react';
import SearchInputs from './searchInputs.js';
import TripList from './trip/tripList.js';
import { dummyDataRecAreas, dummyDataFacilities, dummyDataCampsites } from './dummyData.js';
import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import config from '../../config.js';

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
  const getFacilities = (lat, long) => {
    console.log('getting facilities');
    const url = 'https://ridb.recreation.gov/api/v1/facilities/251452/campsites?query=overnight&limit=1000&offset=0';
    const getRequestConfig = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'crossdomain': true,
        'Authorization': config.recreationGovAPIKey,
        'accept': 'application/json'
      }
    };
    axios.get(url, getRequestConfig)
      .then((results) => {
        console.log('results: ', results);
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography>Campfire</Typography>
      <Grid container>
        <Grid item xs={8}>
          <SearchInputs getFacilities={getFacilities}/>
        </Grid>
        <Grid item xs={4}>
          <TripList
            dummyDataRecAreas={dummyDataRecAreas}
            dummyDataFacilities={dummyDataFacilities}
            dummyDataCampsites={dummyDataCampsites}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
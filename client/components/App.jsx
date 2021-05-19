import React, { useState } from 'react';
import SearchInputs from './searchInputs.js';
import SearchResults from './searchResults/searchResults.js';
import TripList from './trip/tripList.js';
import { dummyDataRecAreas, dummyDataFacilities, dummyDataCampsites } from '../../data/dummyData.js';
import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import config from '../../config.js';
// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors());


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
  const [facilityData, setFacilityData] = useState(null);
  // const [campsiteData, setCampsiteData] = useState(null);

  const getFacilities = (latitude, longitude) => {
    console.log('getting facilities');
    const url = 'https://ridb.recreation.gov/api/v1/facilities/251452/campsites?query=overnight&limit=1000&offset=0';
    const getRequestConfig = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'crossdomain': true,
        'Authorization': config.recreationGovAPIKey,
        'accept': 'application/json'
      }
    };
    // app.get('/getCampsites', (req, res, next) => {
    //   console.log('res: ', res);
    // })
    axios.get(`http://localhost:3000/getFacilities?latitude=${latitude}&longitude=${longitude}`)
      .then((facilityInfo) => {
        console.log('results: ', facilityInfo);
        setFacilityData(facilityInfo.data);
        return facilityInfo.data;
      })
      // .then((facilities) => {
      //   let allCampsites = {};
      //   for (let i = 0; i < facilities.length; i++) {
      //     let facilityId = facilities[i].FacilityID;
      //     axios.get(`http://localhost:3000/getCampsites?facilityId=${facilityId}`)
      //       .then((campsiteInfo) => {
      //         console.log('campsite info: ', campsiteInfo);
      //         allCampsites[facilityId] = campsiteInfo.data;
      //         console.log('allCampsites: ', allCampsites);
      //         setCampsiteData[allCampsites];
      //       })
      //     }
      //   })
        .catch((err) => {console.error(err)})

    // console.log('campsiteData: ', campsiteData);

    // axios.get(`http://localhost:3000/getCampsites?facilityId=${facilityId}`)
    // .then((campsiteInfo) => {
    //   console.log('campsite info: ', campsiteInfo.data);
    //   setCampsiteData(campsiteInfo.data);
    // })
    // .catch((err) => {
    //   console.error(err);
    // })
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography>Campfire</Typography>
      <Grid container>
        <Grid item xs={8}>
          <Grid item>
            <SearchInputs getFacilities={getFacilities}/>
          </Grid>
          <Grid item>
              <SearchResults
                facilities={facilityData}
                // campsites={campsiteData}
              />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <TripList
            facilities={facilityData}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
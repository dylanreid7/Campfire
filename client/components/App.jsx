import React, { useState } from 'react';
import SearchInputs from './searchInputs.js';
import SearchResults from './searchResults/searchResults.js';
import TripList from './trip/tripList.js';
import Header from './header.js';
import { Grid, Typography, Button, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import config from '../../config.js';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff8c00',
      main: '#ff8c00',
      dark: '#ff8c00',
      contrastText: '#442C2E',
    },
    secondary: {
      light: '#442C2E',
      main: '#442C2E',
      dark: '#442C2E',
      contrastText: '#ff8c00',
    },
    text: {
      primary: '#442C2E',
      secondary: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'arial',
  }
});

const useStyles = makeStyles({
  root: {
    width: 700,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  content: {
    flex: '1 0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height: 200,
    width: 200
  },
  divider: {
    display: 'flex',
    flexDirection: 'row'
  },
  end: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  spacingBottom: {
    marginBottom: '20px'
  },
  smallSpacing: {
    marginBottom: '10px',
    marginTop: '10px'
  }
});


const App = () => {
  const [facilityData, setFacilityData] = useState(null);
  const [trips, setTrips] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  // const [campsiteData, setCampsiteData] = useState(null);
  const classes = useStyles();

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

  const changeCheckInDate = (date) => {
    console.log('ci date: ', date);
    setCheckInDate(date);
  }

  const changeCheckOutDate = (date) => {
    console.log('co date: ', date);
    setCheckOutDate(date);
  }


  return (
    <ThemeProvider theme={theme}>
      {/* <Button
        size="large"
        variant="contained"
        className={classes.spacingBottom}
      >
      Campfire
      </Button> */}
      <AppBar position="sticky" color="primary" className={classes.spacingBottom}>
        <Toolbar>
          <Header/>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={7} className={classes.smallSpacing}>
          <Grid item>
            <SearchInputs
            getFacilities={getFacilities}
            changeCheckInDate={changeCheckInDate}
            changeCheckOutDate={changeCheckOutDate}/>
          </Grid>
          <Grid item>
              <SearchResults
                facilities={facilityData}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                // campsites={campsiteData}
              />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <TripList
            // facilities={facilityData}
            // trips={trips}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
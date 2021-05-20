import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core';
import TripItem from './tripItem.js';
import axios from 'axios';
// import getAllTrips from '../../../server/db/index.js';

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


export default function TripList({ trips, checkInDate, checkOutDate }) {
  console.log('trips in trip list: ', trips);
  // const [trips, setTrips] = useState(null);
  // console.log('facilities: ', facilities);
  // if (!facilities) {
  //   return (
  //     <Typography>Your Trips</Typography>
  //   )
  // }
  const classes = useStyles();
  // get all trips from Database
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/getAllTrips`)
  //   .then((allTrips) => {
  //     console.log('all trips: ', allTrips.data);
  //     if (Object.keys(allTrips.data).length === 0) {
  //       return;
  //     }
  //     for (let i = 0; i < allTrips.length; i++) {
  //       console.log('trip: ', allTrips[i]);
  //       console.log('hello');
  //     }
  //     setTrips(allTrips.data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // }, []);

  // let trips = getAllTrips();



  return (
    <>
      {/* <Typography>Your Trips</Typography> */}
      <AppBar position="sticky" color="primary" className={classes.spacingBottom}>
        <Toolbar>
          <Typography variant="h5">Your Trips</Typography>
        </Toolbar>
      </AppBar>
      {trips.length > 0 ?
      trips.map((trip, i) => {
        return <TripItem trip={trip} checkInDate={checkInDate} checkOutDate={checkOutDate} key={i}/>
      }) :
      null }
    </>
  );
}
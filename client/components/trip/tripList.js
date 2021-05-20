import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TripItem from './tripItem.js';
import axios from 'axios';
// import getAllTrips from '../../../server/db/index.js';

export default function TripList({ checkInDate, checkOutDate }) {
  const [trips, setTrips] = useState(null);
  // console.log('facilities: ', facilities);
  // if (!facilities) {
  //   return (
  //     <Typography>Your Trips</Typography>
  //   )
  // }

  // get all trips from Database
  useEffect(() => {
    axios.get(`http://localhost:3000/getAllTrips`)
    .then((allTrips) => {
      console.log('all trips: ', allTrips.data);
      if (Object.keys(allTrips.data).length === 0) {
        return;
      }
      for (let i = 0; i < allTrips.length; i++) {
        console.log('trip: ', allTrips[i]);
        console.log('hello');
      }
      setTrips(allTrips.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  // let trips = getAllTrips();
  return (
    <>
      <Typography>Your Trips</Typography>
      {trips ?
      trips.map((trip, i) => {
        return <TripItem trip={trip} checkInDate={checkInDate} checkOutDate={checkOutDate} key={i}/>
      }) :
      null }
    </>
  );
}
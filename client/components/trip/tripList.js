import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TripItem from './tripItem.js'

export default function TripList({ dummyDataRecAreas, dummyDataFacilities, dummyDataCampsite }) {
  return (
    <>
      <Typography>Your Trips</Typography>
      {dummyDataRecAreas.RECDATA.map((trip, i) => {
        return <TripItem trip={trip} key={i}/>
      })}
    </>
  );
}
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TripItem from './tripItem.js'

export default function TripList({ dummyDataRecAreas, facilities, dummyDataCampsite }) {
  console.log('facilities: ', facilities);
  if (!facilities) {
    return (
      <Typography>Your Trips</Typography>
    )
  }
  return (
    <>
      <Typography>Your Trips</Typography>
      {facilities.map((facility, i) => {
        return <TripItem facility={facility} key={i}/>
      })}
    </>
  );
}
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export default function TripItem({ trip }) {
  console.log('trip', trip);
  return (
    <>
      <img src={trip.RecAreaMapURL}></img>
      <Typography>{trip.RecAreaName}</Typography>
      <Typography>{trip.RecAreaPhone}</Typography>
    </>
  );
}

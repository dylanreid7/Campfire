import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export default function TripItem({ facility }) {
  console.log('facility', facility);
  return (
    <>
      <img src={facility.MEDIA[0].URL}></img>
      <Typography>{facility.FacilityName}</Typography>
      <Typography>{facility.FacilityPhone}</Typography>
    </>
  );
}

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export default function TripItem({ facility }) {
  console.log('facility', facility);
  return (
    <>
      { facility.MEDIA.length > 0 ?
        <img src={facility.MEDIA[0].URL}></img>
        :
        <img src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"></img>
      }
      <Typography>{facility.FacilityName}</Typography>
      <Typography>{facility.FacilityPhone}</Typography>
    </>
  );
}

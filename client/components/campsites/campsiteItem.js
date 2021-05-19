import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export default function CampsiteItem({ campsite }) {
  console.log('campsite: ', campsite);
  // if (!facilities) {
  //   return (
  //     <Typography>Your Trips</Typography>
  //   )
  // }
  return (
    <>
      <Typography>{campsite.CampsiteName}</Typography>
      {/* {facilities ?
      facilities.map((facility, i) => {
        return <TripItem facility={facility} key={i}/>
      }) :
      null } */}
    </>
  );
}
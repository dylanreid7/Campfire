import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CampsiteItem from './campsiteItem.js'

export default function CampsiteList({ campsites }) {
  console.log('campsites: ', campsites);
  let length;
  if (campsites.length > 5) {
    length = 5;
  } else {
    length = campsites.length;
  }
  let campsitesShortened = [];
  for (let i = 0; i < length; i++) {
    campsitesShortened.push(campsites[i]);
  }
  // if (!facilities) {
  //   return (
  //     <Typography>Your Trips</Typography>
  //   )
  // }
  return (
    <>
      {/* <Typography>I'm about to show campsites baby!</Typography> */}
      { campsites ?
        campsitesShortened.map((campsite, i) =>  {
          return <CampsiteItem campsite={campsite} key={i}/>
        })
        :
        null
      }
      {/* {facilities ?
      facilities.map((facility, i) => {
        return <TripItem facility={facility} key={i}/>
      }) :
      null } */}
    </>
  );
}
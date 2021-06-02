import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CampsiteItem from './campsiteItem.js'

export default function CampsiteList({ campsites, checkInDate, checkOutDate, inputTrip }) {
  return (
    <>
      { campsites ?
        campsites.map((campsite, i) =>  {
          return <CampsiteItem
            campsite={campsite}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            inputTrip={inputTrip}
            key={i}
          />
        })
        :
        null
      }
    </>
  );
}
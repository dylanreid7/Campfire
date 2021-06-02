import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import SearchItem from './searchItem.js';

const useStyles = makeStyles({
  spacing: {
    marginTop: '20px'
  }
});

export default function SearchResults({ facilities, campsites, checkInDate, checkOutDate, inputTrip }) {
  const classes = useStyles();

  if (!facilities) {
    return (
      <>
        <Typography variant="h2" className={classes.spacing}>Your next adventure is a click away...</Typography>
        <div id="search-picture">
          <img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
        </div>
      </>
    )
  }
  if (campsites) {
    const facilitiesAndCampsites = [];
    for (let i = 0; i < facilities.length; i++) {
      facilities[i].campsites = campsites[facilities[i].FacilityID];
    }
  }

  return (
    <>
      {facilities.map((facility, i) => {
        return <SearchItem
          facility={facility}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          inputTrip={inputTrip}
          key={i}
        />
      })}
    </>
  );
}
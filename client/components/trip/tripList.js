import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core';
import TripItem from './tripItem.js';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: 700,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  content: {
    flex: '1 0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height: 200,
    width: 200
  },
  divider: {
    display: 'flex',
    flexDirection: 'row'
  },
  end: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  spacingBottom: {
    marginBottom: '20px'
  },
  smallSpacing: {
    marginBottom: '10px',
    marginTop: '10px'
  }
});


export default function TripList({ trips, checkInDate, checkOutDate }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" color="primary" className={classes.spacingBottom}>
        <Toolbar>
          <Typography variant="h5">Your Trips</Typography>
        </Toolbar>
      </AppBar>
      {trips.length > 0 ?
      trips.map((trip, i) => {
        return <TripItem trip={trip} checkInDate={checkInDate} checkOutDate={checkOutDate} key={i}/>
      }) :
      null }
    </>
  );
}
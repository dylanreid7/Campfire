import React from 'react';
import { makeStyles } from '@material-ui/core';
import TripItem from './tripItem.js'

export default function TripList() {
  return (
    <>
      <div>Your Trips</div>
      <TripItem/>
    </>
  );
}
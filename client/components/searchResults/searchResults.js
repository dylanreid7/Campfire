import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import SearchItem from './searchItem.js';

export default function SearchResults({ facilities, campsites }) {
  console.log('campsites: ', campsites);

  if (!facilities) {
    return (
      <div id="search-picture">
        <img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
      </div>
    )
  }
  if (!campsites) {
    console.log('campsites: ', campsites);
    const facilitiesAndCampsites = [];
    for (let i = 0; i < facilities.length; i++) {
      facilities[i].campsites = campsites[facilities[i].FacilityID];
    }
    console.log('facilities and campsites: ', facilitiesAndCampsites);
  }
  return (
    <>
      {facilities.map((facility, i) => {
        return <SearchItem facility={facility} key={i}/>
      })}
    </>
  );
}
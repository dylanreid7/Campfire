import React, { useState } from 'react';
import { makeStyles, TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import zipcodes from 'zipcodes';

export default function Search({ getFacilities }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
    // get search input -> city or zip
      let latitude, longitude;
      // figure out if it's a city or a zip, then get the latitude and longitude
      if (inputValue.length === 5 && !isNaN(inputValue)) {
        latitude = zipcodes.lookup(inputValue).latitude;
        longitude = zipcodes.lookup(inputValue).latitude;
      } else {
        let split = inputValue.split(', ');
        let city = split[0];
        city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        let state = split[1];
        state = state.toUpperCase();
        let zips = zipcodes.lookupByName(city, state);
        if (zips.length === 0) {
          console.log('input is not a valid city or zip code');
          return;
        }
        latitude = zips[0].latitude;
        longitude = zips[0].longitude;
      }
      console.log(`latitude: ${latitude}, longitude: ${longitude}`);
      getFacilities(latitude, longitude);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  return (
    <TextField
      size="medium"
      label="Search for Campsites..."
      variant="filled"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}
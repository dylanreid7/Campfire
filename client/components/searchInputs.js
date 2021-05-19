import React from 'react';
import Search from './searchInputs/search.js';
import CheckIn from './searchInputs/checkIn.js';
import CheckOut from './searchInputs/checkOut.js';
import Filter from './searchInputs/filter.js';
import Grid from '@material-ui/core/Grid';

const SearchInputs = ({ getFacilities }) => {
  return (
    <Grid container>
      <Search getFacilities={getFacilities}/>
      <CheckIn/>
      <CheckOut/>
      <Filter/>
    </Grid>
  )
}

export default SearchInputs;
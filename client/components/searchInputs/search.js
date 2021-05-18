import React from 'react';
import { makeStyles, TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
  return (
    <TextField
      size="medium"
      label="Search for Campsites..."
      variant="outlined"
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
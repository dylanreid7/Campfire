import React, { useState } from 'react';
import { makeStyles, TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search({ getFacilities }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(inputValue);
      getFacilities(inputValue);
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
      variant="outlined"
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
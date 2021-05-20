import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import dateFormat from 'dateformat';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function CheckIn() {
  const classes = useStyles();
  const now = new Date();
  const checkInDate = dateFormat(now, "yyyy-mm-dd");
  console.log(checkInDate);
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="checkindate"
        variant="filled"
        label="Check In Date"
        color="primary"
        type="date"
        defaultValue={checkInDate}
        className={classes.textField}
        // InputLabelProps={{
        //   shrink: true,
        // }}
      />
    </form>
  );
}

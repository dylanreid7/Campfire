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

export default function CheckOut({ changeCheckOutDate }) {
  const classes = useStyles();
  var now = new Date();
  now.setDate(now.getDate() + 1);
  const checkOutDate = dateFormat(now, "yyyy-mm-dd");
  console.log(checkOutDate);
  const handleChange = (e) => {
    changeCheckOutDate(e.target.value);
  }
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="checkoutdate"
        variant="filled"
        label="Check Out Date"
        type="date"
        defaultValue={checkOutDate}
        className={classes.textField}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

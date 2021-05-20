import React, { useState } from 'react';
import { makeStyles, Typography, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core';
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
  }
});

export default function TripItem({ trip }) {
  const [tripDeleted, setTripDeleted] = useState(false);
  console.log('facility', trip);
  const classes = useStyles();

  let imageUrl;
  if (trip.pictureUrl) {
    imageUrl = trip.pictureUrl;
  } else {
    imageUrl = 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80';
  }
  const handleClick = () => {

  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <div className={classes.divider}>
          <CardMedia
            className={classes.image}
            image={imageUrl}
            title="Campground Image"
          />
          <div className={classes.details}>
            <CardContent className={classes.details}>
              <Typography variant="h2">
                {trip.facilityName}
              </Typography>
              <Typography className={classes.title} variant="h5" component="h2">
                {trip.campsiteName}
              </Typography>
              <Typography variant="caption">
                {`Check in date: ${trip.checkInDate}, ${trip.checkOutDate}`}
              </Typography>
              {/* <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
            </CardContent>
            <CardActions className="end">
              <Button
                size="small"
                variant="contained"
                onClick={handleClick}
              >
              Remove Trip
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </>
  );
}

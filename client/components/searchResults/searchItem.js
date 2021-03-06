import React, { useState } from 'react';
import { makeStyles, Typography, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core';
import axios from 'axios';
import CampsiteList from '../campsites/campsiteList.js';

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

export default function SearchItem({ facility, checkInDate, checkOutDate, inputTrip }) {
  const [campsitesShown, setCampsitesShown] = useState(false);
  const [campsiteData, setCampsiteData] = useState(null);

  const classes = useStyles();
  let imageUrl;
  if (facility.MEDIA.length > 0) {
    imageUrl = facility.MEDIA[0].URL;
  } else {
    imageUrl = 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80';
  }

  const handleClick = () => {
    setCampsitesShown(true);
    let facilityId = facility.FacilityID;
    axios.get(`http://localhost:3000/getCampsites?facilityId=${facilityId}`)
      .then((campsiteInfo) => {
        setCampsiteData(campsiteInfo.data);
      })
      .catch((err) => {
        console.error(err);
      })
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
              <Typography className={classes.title} variant="h5" component="h2">
                {facility.FacilityName}
              </Typography>
              <Typography variant="caption">
                {`${facility.FACILITYADDRESS[0].City}, ${facility.FACILITYADDRESS[0].AddressStateCode}`}
              </Typography>
              <Typography variant="caption">
                {facility.FacilityPhone}
              </Typography>
            </CardContent>
            <CardActions className="end">
              <Button
                size="small"
                variant="contained"
                onClick={handleClick}
              >
              See Campsites
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
      { campsiteData ?
        <CampsiteList
          campsites={campsiteData}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          inputTrip={inputTrip}
        />
        :
        null
      }
    </>
  );
}

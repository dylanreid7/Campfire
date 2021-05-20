import React from 'react';
import { makeStyles, Typography, Card, CardActions, CardContent, Button, CardMedia } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    width: 400,
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
    height: 150,
    width: 150
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




export default function CampsiteItem({ campsite, checkInDate, checkOutDate }) {
  console.log('campsite: ', campsite);
  console.log('ci d bleh: ', checkInDate);
  console.log('co d bleh: ', checkOutDate);
  // if (!facilities) {
  //   return (
  //     <Typography>Your Trips</Typography>
  //   )
  // }
  const classes = useStyles();
  let imageUrl;
  if (campsite.ENTITYMEDIA.length > 0) {
    imageUrl = campsite.ENTITYMEDIA[0].URL;
  } else {
    imageUrl = 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80';
  }

  const handleClick = () => {
    console.log('clicked campsite: ', campsite);
    axios.post('http://localhost:3000/postCampsite', {
      campsiteName: campsite.CampsiteName,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      pictureUrl: campsite.ENTITYMEDIA[0].URL,
      facilityName: campsite.Loop
    })
      .then((response) => {
        console.log('response: ', response);
      })
      .catch((err) => {
        console.error(err);
      })
  }


  return (
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
              {`Site Number: ${campsite.CampsiteName}`}
            </Typography>
            <Typography variant="caption">
              {campsite.CampsiteType}
            </Typography>
            <Typography variant="caption">
              {`Max. Number of People: ${campsite.ATTRIBUTES[2].AttributeValue}`}
            </Typography>
            <Typography variant="caption">
              {`Campfire Allowed: ${campsite.ATTRIBUTES[7].AttributeValue}`}
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
            Add To Your Trip
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}



// {/* <>
//       <Typography>{campsite.CampsiteName}</Typography>
//       {/* {facilities ?
//       facilities.map((facility, i) => {
//         return <TripItem facility={facility} key={i}/>
//       }) :
//       null } */}
//     </> */}
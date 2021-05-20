const express = require('express')
const cors = require('cors');
const axios = require('axios');
const config = require('../config.js');
const { addTrip, removeTrip, getAllTrips } = require('../server/db/index.js');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.use(express.static(__dirname + "/../dist"));

app.get('/getFacilities', (req, res, next) => {
  console.log('received server request');
  console.log('latitude, i think: ', req.query.latitude);
  console.log('longitude, i think: ', req.query.longitude);
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  const url = 'https://ridb.recreation.gov/api/v1/facilities?';
  const query = `latitude=${latitude}&longitude=${longitude}&activity=CAMPING&full=true`;
  const fullUrl = url + query;
  const getRequestConfig = {
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'crossdomain': true,
      'apikey': config.recreationGovAPIKey
      // 'accept': 'application/json'
    }
  };
  axios.get(fullUrl, getRequestConfig)
    .then((campingFacilityResults) => {
      console.log('sending campingFacilityResults');
      res.send(campingFacilityResults.data.RECDATA);
    })
    .catch((err) => {console.error(err)})
})

app.get('/getCampsites', (req, res, next) => {
  console.log('facility ID, I think: ', req.query.facilityId);
  const facilityId = req.query.facilityId;
  const url = `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/campsites?offset=0`;
  const getRequestConfig = {
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // 'crossdomain': true,
      'apikey': config.recreationGovAPIKey
      // 'accept': 'application/json'
    }
  };
  axios.get(url, getRequestConfig)
    .then((campsiteResults) => {
      // console.log('sending campsite results: ', campsiteResults);
      res.send(campsiteResults.data.RECDATA);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.post('/postCampsite', (req, res, next) => {
  console.log('campsite data: ', req.body);
  addTrip(req.body);
  res.status(201).end();
})

app.delete('/deleteCampsite', (req, res, next) => {
  console.log('removing campsite: ', req.body);
  removeTrip(req.body);
  res.status(204).end();
})

app.get('/getAllTrips', (req, res, next) => {
  console.log('getting all trips.');
  const query = getAllTrips();
  query.exec((err, trips) => {
    if (err) {
      console.error(err);
    } else {
      res.send(trips);
    }
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
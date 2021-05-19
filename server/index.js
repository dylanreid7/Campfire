const express = require('express')
var cors = require('cors');
const axios = require('axios');
const config = require('../config.js');
const app = express()
const port = 3000
app.use(cors());


app.use(express.static(__dirname + "/../dist"));

app.get('/getCampsites', (req, res, next) => {
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
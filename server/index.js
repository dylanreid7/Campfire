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
  const url = 'https://ridb.recreation.gov/api/v1/facilities/251452/campsites?query=overnight&limit=1000&offset=0';
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
    .then((data) => {
      console.log('sending data');
      res.send(data.data);
    })
    .catch((err) => {console.error(err)})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
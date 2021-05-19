// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors());

// app.get('/getCampsites', (req, res, next) => {
//   console.log('received server request');
//   const url = 'https://ridb.recreation.gov/api/v1/facilities/251452/campsites?query=overnight&limit=1000&offset=0';
//   const getRequestConfig = {
//     headers: {
//       // 'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       'crossdomain': true,
//       'Authorization': config.recreationGovAPIKey,
//       'accept': 'application/json'
//     }
//   };
//   axios.get(url, getRequestConfig)
//     .then((data) => {console.log(data)})
//     .catch((err) => {console.error(err)})
// })


// // const getCampsitesByLocation = (query) => {
// //   console.log(query);
// //   const url = query.url;
// //   app.get(url, (req, res) => {
// //     console.log('res: ', res);
// //   })
// // }

// module.exports = getCampsitesByLocation;

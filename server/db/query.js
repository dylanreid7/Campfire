const mongoose = require('mongoose');
const Trip = require('./model.js');
const connection = require('./index.js');

const addTrip = (tripInputs) => {
  let { campsiteName, checkInDate, checkOutDate, pictureUrl, facilityName } = tripInputs;
  const addedTrip = new Trip({
    campsiteName,
    checkInDate,
    checkOutDate,
    pictureUrl,
    facilityName
  });

  addedTrip.save((err, campsite) => {
    if (err) return console.error(err);
    console.log(campsite.campsiteName + ' saved to your trips');
  })
}

const removeTrip = (trip) => {

}

module.exports = {
  addTrip,
  removeTrip
};
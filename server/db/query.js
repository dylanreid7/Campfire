const mongoose = require('mongoose');
const Trips = require('./model.js');
const connection = require('./db.js');

const addTrip = (tripInputs) => {

  const addedTrip = new Trip({
    campsiteName: 'String',
    checkInDate: 'Date',
    checkOutDate: 'Date',
    pictureUrl: 'String',
    facilityName: 'String'
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
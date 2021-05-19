const mongoose = require('mongoose');
const connection = require('./db.js');

const tripSchema = new mongoose.Schema({
  campsiteName: 'String',
  checkInDate: 'Date',
  checkOutDate: 'Date',
  pictureUrl: 'String',
  facilityName: 'String'
})

const Trips = mongoose.model('Trips', tripSchema);

module.exports = Trips;
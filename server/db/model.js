const mongoose = require('mongoose');
const connection = require('./index.js');

const tripSchema = new mongoose.Schema({
  campsiteName: 'String',
  checkInDate: 'Date',
  checkOutDate: 'Date',
  pictureUrl: 'String',
  facilityName: 'String'
})

module.export = mongoose.model('trips', tripSchema);
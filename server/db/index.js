const mongoose = require('mongoose');

const campsitesUrl = 'mongodb://localhost:27017/Campsites';
mongoose.connect(campsitesUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('connection successful');
})

const tripSchema = new mongoose.Schema({
  campsiteName: 'String',
  checkInDate: 'String',
  checkOutDate: 'String',
  pictureUrl: 'String',
  facilityName: 'String'
})

var Trip = mongoose.model('Trip', tripSchema, 'trips');

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

const removeTrip = (campsiteName) => {
  console.log('del campsite name: ', campsiteName);
  Trip.deleteOne({campsiteName}, (err) => {
    if (err) return console.error(err);
    console.log(`deleted ${campsiteName} from database.`);
  });
}

function getAllTrips() {
  const query = Trip.find({})
  return query;
}

module.exports = {
  addTrip,
  removeTrip,
  getAllTrips
};
const mongoose = require('mongoose');

const campsitesUrl = 'mongodb://mongo:27017/Campsites';
mongoose.connect(campsitesUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));

module.exports = connection;
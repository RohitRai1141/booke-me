const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/bookme';

// Remove deprecated options
mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error', () => {
  console.log('MongoDB connection failed');
});

connection.on('connected', () => {
  console.log('MongoDB connection successful');
});

module.exports = mongoose;

const mongoose = require('mongoose');

// Define the room schema
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  maxcount: {
    type: Number,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  rentperday: {
    type: Number,
    required: true
  },
  imageurls: {
    type: [String], // Assuming imageurls is an array of strings (URLs)
    required: true
  },
  currentbookings: {
    type: [String], // Assuming currentbookings is an array of strings
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the model
const RoomModel = mongoose.model('Room', roomSchema);

// Export the model
module.exports = RoomModel;

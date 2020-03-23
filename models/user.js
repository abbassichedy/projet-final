const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  typeuser: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  meetings: {
    type: [
      {
        name: String,
        adresse: String,
        tel: String,
        date: String,
        id: String,
        status: { type: String, default: 'waiting' },
      },
    ],
    default: [],
  },
  dateofcreation: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model('user', UserSchema);

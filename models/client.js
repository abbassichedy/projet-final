const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const ClientSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  meetingsclient: {
    type: Array,
    default: [],
  },
});
module.exports = Client = mongoose.model('client', ClientSchema);

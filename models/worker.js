const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const WorkerSchema = new Schema({
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
  metier: {
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
  prix: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    default: 'profile.jpg',
  },
});

module.exports = Worker = mongoose.model('worker', WorkerSchema);

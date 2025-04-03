const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  stadium: { type: String, required: true },
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  score: { type: String },
  status: { type: String, enum: ['scheduled', 'ongoing', 'finished'], default: 'scheduled' }
});

const Partido = mongoose.model('Partido', partidoSchema);

module.exports = Partido;
const mongoose = require('mongoose');

const resultadoSchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Partido', required: true },
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  scoreA: { type: Number, required: true },
  scoreB: { type: Number, required: true },
  winner: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Resultado = mongoose.model('Resultado', resultadoSchema);

module.exports = Resultado;
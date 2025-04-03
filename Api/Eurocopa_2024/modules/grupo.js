const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teams: [{ type: String, required: true }],
  matches: [{ type: String }],
  standings: { type: String }
});

const Grupo = mongoose.model('Grupo', grupoSchema);

module.exports = Grupo;

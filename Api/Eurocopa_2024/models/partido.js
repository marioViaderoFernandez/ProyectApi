const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
    equipo_1: { type: String },  // Nombre de la selección local
    equipo_2: { type: String },  // Nombre de la selección visitante
    estadio: { type: String },  // Nombre del estadio
    match_time: { type: String }  // Hora del partido
});

const Partido = mongoose.model('Partido', partidoSchema);
module.exports = Partido;

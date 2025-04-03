const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
    local_name_selection: { type: String },  // Nombre de la selección local
    visitor_name_selection: { type: String },  // Nombre de la selección visitante
    stadium_name: { type: String },  // Nombre del estadio
    match_time: { type: String }  // Hora del partido
});

const Partido = mongoose.model('Partido', partidoSchema);
module.exports = Partido;

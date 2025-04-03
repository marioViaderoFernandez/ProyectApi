const mongoose = require('mongoose');

const resultadoSchema = new mongoose.Schema({
    local_name_selection: { type: String },  // Nombre de la selección local
    visitor_name_selection: { type: String },  // Nombre de la selección visitante
    local_score: { type: Number, default: null },  // Puntaje de la selección local
    visitor_score: { type: Number, default: null },  // Puntaje de la selección visitante
    match_date: { type: String, default: null }  // Fecha del partido
});

const Resultado = mongoose.model('Resultado', resultadoSchema);
module.exports = Resultado;

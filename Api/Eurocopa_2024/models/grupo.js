const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    group_name: { type: String },  // Grupo A, B, C, D, E, F
    selections: [{ type: String }]  // Lista de selecciones en este grupo
});

const Grupo = mongoose.model('Grupo', grupoSchema);
module.exports = Grupo;

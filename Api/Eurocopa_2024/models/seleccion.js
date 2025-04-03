const mongoose = require('mongoose');

const seleccionSchema = new mongoose.Schema({
    selection_name: { type: String },  // Nombre de la selección
    capital: { type: String },  // Capital del país
    group_name: { type: String },  // Grupo asignado (A, B, C, D, E, F)
    population: { type: Number },  // Población del país
    coach: { type: String }  // Nombre del entrenador
});

const Seleccion = mongoose.model('Seleccion', seleccionSchema);
module.exports = Seleccion;

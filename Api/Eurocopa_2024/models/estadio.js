const mongoose = require('mongoose');

const estadioSchema = new mongoose.Schema({
    name: { type: String },
    city: { type: String },
    capacity: { type: Number },
    selection_name: { type: String }  // La selección que juega en este estadio
});

const Estadio = mongoose.model('Estadio', estadioSchema);
module.exports = Estadio;

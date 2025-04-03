const mongoose = require('mongoose');

const estadioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  builtYear: { type: Number },
  team: { type: String },
  image: { type: String } // URL de la imagen del estadio
});

const Estadio = mongoose.model('Estadio', estadioSchema);

module.exports = Estadio;

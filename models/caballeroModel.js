const mongoose = require('mongoose');

const caballeroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  constelacion: String,
  imagen: String,
  genero: String,
  poderes: [String],
});

module.exports = mongoose.model('Caballero', caballeroSchema);

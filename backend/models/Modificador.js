const mongoose = require('mongoose');

const modificadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  precioExtra: { type: Number, default: 0 },
});

const Modificador = mongoose.model('Modificador', modificadorSchema);
module.exports = Modificador;

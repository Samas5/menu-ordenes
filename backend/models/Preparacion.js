const mongoose = require('mongoose');

const preparacionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
});

const Preparacion = mongoose.model('Preparacion', preparacionSchema);
module.exports = Preparacion;

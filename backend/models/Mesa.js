const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
  numeroDeMesa: { type: Number, unique: true, required: true },
  estadoDeLaMesa: String,
  disponibilidad: Boolean,
  capacidad: { type: Number, required: true },
});

const Mesa = mongoose.model('Mesa', mesaSchema);
module.exports = Mesa;

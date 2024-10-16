const mongoose = require('mongoose');

const metodoPagoSchema = new mongoose.Schema({
  // POR DEFINIR
  // tipo: { type: String, required: true },
  // detalles: String,
});

const MetodoPago = mongoose.model('MetodoPago', metodoPagoSchema);
module.exports = MetodoPago;

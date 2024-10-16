const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  numeroDeTelefono: { type: String, unique: true },
  metodoDePago: String,
  historialDePedidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orden' }],
});

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;

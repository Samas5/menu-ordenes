const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  numeroDeOrden: { type: Number, unique: true, required: true },
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],
  metodoDePago: String,
  cantidadAPagar: { type: Number, required: true },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  fecha: { type: Date, default: Date.now },
  mesa: { type: mongoose.Schema.Types.ObjectId, ref: 'Mesa' },
  estadoDelPedido: String,
});

const Orden = mongoose.model('Orden', ordenSchema);
module.exports = Orden;

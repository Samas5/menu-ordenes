const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  productosIncluidos: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  ],
  precio: { type: Number, required: true },
});

const Paquete = mongoose.model('Paquete', paqueteSchema);
module.exports = Paquete;

const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  descripcion: String,
  imagen: String,
  categoria: String,
  precio: { type: Number, required: true },
  modificadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Modificador' }],
  preparaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Preparacion' }],
  complementos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Extra' }],
  disponibilidad: { type: Boolean, default: true },
});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;

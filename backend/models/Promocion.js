const mongoose = require('mongoose');

const promocionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  descripcion: String,
  descuento: { type: Number, required: true },
  productosIncluidos: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  ],
  fechaDeInicio: Date,
  fechaDeFin: Date,
});

const Promocion = mongoose.model('Promocion', promocionSchema);
module.exports = Promocion;

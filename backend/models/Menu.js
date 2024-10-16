const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  // productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }, ...  ],
  // promociones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Promocion' }, ... ],
  // paquetes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Paquete' }, ...],
  fechaDeActualizacion: Date,
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;

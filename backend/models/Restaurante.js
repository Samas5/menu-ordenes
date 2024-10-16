const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  nombre: { type: String, required: true },
  // menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
  planDeTarifas: String,
  // vigenciaDeTarifas: String,
  temporadaActiva: { type: mongoose.Schema.Types.ObjectId, ref: 'Temporada' },
  ubicacion: String,
  horarios: String,
  contacto: String,
  configuracion: mongoose.Schema.Types.Mixed, // JSON de configuración, estilos, etc
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);
module.exports = Restaurante;

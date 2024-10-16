const mongoose = require('mongoose');

const temporadaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaDeInicio: { type: Date, required: true },
  fechaDeFin: { type: Date, required: true },
  menusDisponibles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
});

const Temporada = mongoose.model('Temporada', temporadaSchema);
module.exports = Temporada;

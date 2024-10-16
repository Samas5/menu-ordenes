const mongoose = require('mongoose');

const extraSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
});

const Extra = mongoose.model('Extra', extraSchema);
module.exports = Extra;

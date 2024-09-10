const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  modificadores: [String],
  preparaciones: [String],
  notas: { type: String, default: "" },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;

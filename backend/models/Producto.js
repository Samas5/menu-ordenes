const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: String, required: true },
  cantidad: { type: String, required: true },
  modificador: String,
  preparacion: String,
  notas: { type: String, default: "" },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;

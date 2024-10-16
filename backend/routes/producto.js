const express = require('express');
const Producto = require('../models/Producto'); // Importamos el modelo de producto
const router = express.Router();

router.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos', error);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;

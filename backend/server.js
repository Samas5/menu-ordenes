const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Para conectar al puerto 3000 de React
app.use(express.json()); // Para los JSONS

// CONEXIÓN
mongoose.connect('mongodb://localhost:27017/comandera-comensales', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conexion = mongoose.connection; // Guardamos la conexión en una variable
conexion.once('open', () => {
  console.log('SERVER ON');
});

// RUTA DE PRUEBA
app.get('/', (req, res) => {
  res.send('ruta funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});

// IMPORTAR RUTAS
const productoRoutes = require('./routes/producto');
app.use('/api', productoRoutes); // Las rutas usarán el prefijo /api

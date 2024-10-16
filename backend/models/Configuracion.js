const mongoose = require('mongoose');

const configuracionSchema = new mongoose.Schema({
  // POR DEFINIR
  // estilosDeInterfaz:
  // metodosDePagoAdmitidos:
  // metodoDeNotificacion:
  // dispositivos:
  // ...............
});

const Configuracion = mongoose.model('Configuracion', configuracionSchema);
module.exports = Configuracion;

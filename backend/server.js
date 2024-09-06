const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/comandera-comensales", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conexion = mongoose.connection;
conexion.once("open", () => {
  console.log("CONECTADO A MONGODB");
});

app.get("/", (req, res) => {
  res.send("EXITOSO");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

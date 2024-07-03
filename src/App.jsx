import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import imagen from "./images/huevos-estrellados.png";
import Pago from "./components/Pago";
import Resumen from "./components/Resumen";
import Confirmado from "./components/Confirmado";
import PedidoConfirmado from "./components/PedidoConfirmado";

function App() {
  //* Variable de estado para el precio
  const [precio, setPrecio] = useState(120);

  //* Variable de estado para los modificadores
  const [modificador, setModificador] = useState("");

  //* Variable de estado para las preparaciones
  const [preparacion, setPreparacion] = useState("");

  //* Variable de estado booleana para habilitar el botón de confirmar
  const [botonConfirmar, setBotonConfirmar] = useState(false);

  //* Variable de estado para las notas
  const [notas, setNotas] = useState("");

  //* Variable de estado para la promoción
  const [promocion, setPromocion] = useState("");

  //* Variable de estado para el número del cliente
  const [telefonoCliente, setTelefonoCliente] = useState("");

  //* Variable de estado para el método de pago
  const [formaPago, setFormaPago] = useState("");

  //* Variable de estado para mostrar Resumen
  const [showResumen, setShowResumen] = useState(false);

  //* Variable de estado para mostrar el botón de confirmar
  const [showBotonConfirmarOrden, setShowBotonConfirmarOrden] = useState(true);

  //* Función que pasamos como propiedad a Container. Obtiene el valor
  const getValueConfirmar = (value) => {
    setBotonConfirmar(value);
  };

  //* NAVEGACION

  //* Variable de estado para mostrar el botón de confirmar
  const [showBotonConfirmar, setShowBotonConfirmar] = useState(true);

  //* Funcióm para ocultar el botón de confirmar orden
  const ocultarBotonConfirmarOrden = () => {
    setShowBotonConfirmarOrden(!showBotonConfirmarOrden);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Container
                  getValueConfirmar={getValueConfirmar}
                  precio={precio}
                  setPrecio={setPrecio}
                  modificador={modificador}
                  preparacion={preparacion}
                  setModificador={setModificador}
                  setPreparacion={setPreparacion}
                  notas={notas}
                  setNotas={setNotas}
                />
              }
            />
            <Route
              path="/pago"
              element={
                <Pago
                  setShowResumen={setShowResumen}
                  setShowBotonConfirmar={setShowBotonConfirmar}
                  setPromocion={setPromocion}
                  formaPago={formaPago}
                  setFormaPago={setFormaPago}
                  ocultarBotonConfirmarOrden={ocultarBotonConfirmarOrden}
                />
              }
            />
            <Route
              path="/confirmado"
              element={
                <Confirmado
                  ocultarBotonConfirmarOrden={ocultarBotonConfirmarOrden}
                  telefonoCliente={telefonoCliente}
                  setTelefonoCliente={setTelefonoCliente}
                />
              }
            />
            <Route
              path="/pedido-confirmado"
              element={<PedidoConfirmado telefonoCliente={telefonoCliente} />}
            />
          </Routes>
        </div>
        <div className="second-container">
          {!showResumen ? (
            <img
              className="imagen-producto"
              src={imagen}
              alt="huevos estrellados"
            />
          ) : (
            <Resumen
              precio={precio}
              setPrecio={setPrecio}
              preparacion={preparacion}
              modificador={modificador}
              setShowResumen={setShowResumen}
              showBotonConfirmarOrden={showBotonConfirmarOrden}
              notas={notas}
              formaPago={formaPago}
              ocultarBotonConfirmarOrden={ocultarBotonConfirmarOrden}
            />
          )}
        </div>
      </div>
      <div className="contenedor-boton-confirmar">
        {showBotonConfirmar && (
          <Navegacion
            botonConfirmar={botonConfirmar}
            setShowResumen={setShowResumen}
            setShowBotonConfirmar={setShowBotonConfirmar}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

const Navegacion = ({
  botonConfirmar,
  setShowResumen,
  setShowBotonConfirmar,
}) => {
  const navigate = useNavigate();

  return (
    <button
      className="confirmar-seleccion"
      disabled={!botonConfirmar}
      style={{
        border: `${botonConfirmar ? "none" : ""}`,
        color: `${botonConfirmar ? "white" : ""}`,
        backgroundColor: `${botonConfirmar ? " #4d82f3" : ""}`,
      }}
      onClick={() => {
        setShowResumen(true);
        setShowBotonConfirmar(false);
        navigate("/pago");
      }}
    >
      Confirmar
    </button>
  );
};

export default App;

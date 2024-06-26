import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import imagen from "./images/huevos-estrellados.png";
import Pago from "./components/Pago";
import Resumen from "./components/Resumen";
import Confirmado from "./components/Confirmado";

function App() {
  //* Variable de estado para el precio
  const [precio, setPrecio] = useState(120);

  //* Variable de estado para los modificadores
  const [modificador, setModificador] = useState("");

  //* Variable de estado para las preparaciones
  const [preparacion, setPreparacion] = useState("");

  //* Variable de estado booleana para habilitar el botón de confirmar
  const [botonConfirmar, setBotonConfirmar] = useState(false);

  //* Variable de estado para mostrar Resumen
  const [showResumen, setShowResumen] = useState(false);

  //* Variable de estado para mostrar el botón de confirmar
  const [showConfirmar, setShowConfirmar] = useState(false);

  //* Función que pasamos como propiedad a Container. Obtiene el valor
  const getValueConfirmar = (value) => {
    setBotonConfirmar(value);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Routes>
            <Route
              path="/container"
              element={
                <Container
                  getValueConfirmar={getValueConfirmar}
                  precio={precio}
                  setPrecio={setPrecio}
                  modificador={modificador}
                  preparacion={preparacion}
                  setModificador={setModificador}
                  setPreparacion={setPreparacion}
                />
              }
            />
            <Route
              path="/pago"
              element={<Pago setShowResumen={setShowResumen} />}
            />
            <Route
              path="/resumen"
              element={
                <Confirmado
                  showConfirmar={showConfirmar}
                  setShowConfirmar={setShowConfirmar}
                />
              }
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
              setShowConfirmar={setShowConfirmar}
            />
          )}
        </div>
      </div>
      <div className="contenedor-boton-mayor">
        <Navegacion
          botonConfirmar={botonConfirmar}
          setShowResumen={setShowResumen}
        />
      </div>
    </BrowserRouter>
  );
}
const Navegacion = ({ botonConfirmar, setShowResumen }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="confirmar-seleccion"
        disabled={!botonConfirmar}
        style={{
          border: `${botonConfirmar === true ? "1px solid black" : ""}`,
          color: `${botonConfirmar === true ? "black" : ""}`,
        }}
        onClick={() => {
          setShowResumen(true);
          navigate("/pago");
        }}
      >
        Confirmar
      </button>
    </>
  );
};

export default App;

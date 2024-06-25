import { useState } from "react";
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

  //* Función que pasamos como propiedad a Container. Obtiene el valor
  const getValueConfirmar = (value) => {
    setBotonConfirmar(value);
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <Container
            getValueConfirmar={getValueConfirmar}
            precio={precio}
            setPrecio={setPrecio}
            modificador={modificador}
            preparacion={preparacion}
            setModificador={setModificador}
            setPreparacion={setPreparacion}
          />
          <Pago />
          <Confirmado />
        </div>
        <div className="second-container">
          <img
            classname="imagen-producto"
            src={imagen}
            alt="huevos estrellados"
          />
          <Resumen
            precio={precio}
            setPrecio={setPrecio}
            preparacion={preparacion}
            modificador={modificador}
          />
        </div>
      </div>
      <div className="contenedor-boton-mayor">
        <button
          className="confirmar"
          disabled={!botonConfirmar}
          style={{
            border: `${botonConfirmar === true ? "1px solid black" : ""}`,
            color: `${botonConfirmar === true ? "black" : ""}`,
          }}
        >
          Confirmar
        </button>
      </div>
    </>
  );
}

export default App;

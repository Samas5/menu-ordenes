import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import imagen from "./images/huevos-estrellados.png";
function App() {
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
          <Container getValueConfirmar={getValueConfirmar} />
        </div>
        <div className="contenedor-img">
          <img src={imagen} alt="huevos estrellados" />
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

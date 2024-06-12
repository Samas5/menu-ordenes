import { useEffect, useState } from "react";
import Cantidades from "./Cantidades";
import Modificador from "./Modificador";
import Preparacion from "./Preparacion";

const Container = ({ getValueConfirmar }) => {
  //* Variable de estado para la cantidad de ordenes
  const [cantidad, setCantidad] = useState(1);

  //* Variable de estado para el precio
  const [precio, setPrecio] = useState(120);

  //* Variable de estado para los modificadores
  const [modificador, setModificador] = useState("");

  //* Variable de estado para las preparaciones
  const [preparacion, setPreparacion] = useState("");

  // //* Variable de estado booleana para habilitar el botón de confirmar
  // const [botonConfirmar, setBotonConfirmar] = useState(false);

  //* Función para manejar la cantidad de órdenes y el precio total

  const precioBase = 120;
  const manejarCantidad = (cuantos) => {
    const nuevaCantidad = cantidad + cuantos;
    if (nuevaCantidad > 0) {
      setCantidad(nuevaCantidad);
      setPrecio(precioBase * nuevaCantidad);
    }
  };

  //* Función para manejar el modificador seleccionado
  const seleccionModificador = (modificadorSel) => {
    setModificador(modificadorSel);
  };

  //* Función para manejar la preparación que se seleccione.
  const seleccionPreparacion = (preparacionSel) => {
    setPreparacion(preparacionSel);
  };

  //* useEffect para habilitar el botón de confirmar
  useEffect(() => {
    if (modificador && preparacion) {
      // setBotonConfirmar(true);
      getValueConfirmar(true);
    } else {
      // setBotonConfirmar(false);
      getValueConfirmar(false);
    }
  }, [modificador, preparacion, getValueConfirmar]);

  return (
    <div className="contenedor">
      <header>
        <button className="regresar">←</button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Huevos estrellados {`$${precioBase}.00`}
        </h1>
      </header>

      <p className="text">{`$${precio}.00`}</p>
      <Cantidades manejarCantidad={manejarCantidad} cantidad={cantidad} />
      <Modificador
        modificador={modificador}
        seleccionModificador={seleccionModificador}
      />
      <Preparacion
        preparacion={preparacion}
        seleccionPreparacion={seleccionPreparacion}
      />
      <p className="text" style={{ marginBottom: "8px" }}>
        Notas
      </p>
      <textarea
        style={{
          width: "411.25px",
          height: "45px",
          resize: "none",
          borderRadius: "5px",
        }}
      ></textarea>
    </div>
  );
};

export default Container;

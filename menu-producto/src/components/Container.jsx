import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cantidades from "./Cantidades";
import Modificador from "./Modificador";
import Preparacion from "./Preparacion";

const Container = ({
  getValueConfirmar,
  precio,
  setPrecio,
  modificador,
  preparacion,
  setModificador,
  setPreparacion,
  notas,
  setNotas,
  setShowBotonConfirmar,
  setShowResumen,
  setShowResumenImagen,
  showResumenImagen,
}) => {
  //* Navegacion
  const navigate = useNavigate();

  //* Variable de estado para la cantidad de ordenes
  const [cantidad, setCantidad] = useState(1);

  //* Función para ocultar el div de la imagen
  const ocultarResumenImagen = () => {
    setShowResumenImagen(false);
  };

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

  //* Función para manejar las notas
  const manejarNotas = (e) => {
    setNotas(e.target.value); // Actualizamos el estado de las notas
  };

  //* useEffect para habilitar el botón de confirmar
  useEffect(() => {
    if (modificador && preparacion) {
      getValueConfirmar(true);
    } else {
      getValueConfirmar(false);
    }
  }, [modificador, preparacion, getValueConfirmar]);

  return (
    <div className="contenedor">
      <header>
        <button
          className="regresar"
          onClick={() => {
            navigate("/carrito");
            setShowBotonConfirmar(false);
            setShowResumen(true);
            ocultarResumenImagen();
          }}
        >
          <p className="flechita">←</p>
        </button>
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
        value={notas}
        onChange={manejarNotas}
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

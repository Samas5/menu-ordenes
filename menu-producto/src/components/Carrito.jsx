import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ElementosCarrito from "./ElementosCarrito";

const Carrito = ({
  precio,
  notas,
  preparacion,
  modificador,
  formaPago,
  setShowResumen,
  setShowBotonConfirmar,
}) => {
  //* Navegacion
  const navigate = useNavigate();

  //* Carrito
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <header>
        <div className="contenedor-carrito">
          <h1 className="titulo">Lista de productos</h1>
        </div>
      </header>

      <div className="second-container">
        <ElementosCarrito
          precio={precio}
          notas={notas}
          preparacion={preparacion}
          modificador={modificador}
        />
      </div>
    </>
  );
};

export default Carrito;

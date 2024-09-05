import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Resumen from "./Resumen";

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

  return (
    <>
      <div className="contenedor-carrito">
        <h1 className="titulo">Lista de productos</h1>
      </div>

      <div className="second-container">
        <Resumen />
      </div>
    </>
  );
};

export default Carrito;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ElementosCarrito from "./ElementosCarrito";
import axios from "axios";

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

  //* Productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <div className="contenedor-carrito">
          <h1 className="titulo">Lista de productos</h1>
        </div>
      </header>

      <div>
        <h1>Carrito de Compras</h1>
        {productos.map((producto) => (
          <div key={producto._id}>
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Modificadores: {producto.modificadores}</p>
            <p>Preparaciones: {producto.preparaciones}</p>
            <p>Notas:{producto.notas} </p>
          </div>
        ))}
      </div>

      {/* <div className="second-container">
        <ElementosCarrito
          precio={precio}
          notas={notas}
          preparacion={preparacion}
          modificador={modificador}
        />
      </div> */}
    </>
  );
};

export default Carrito;

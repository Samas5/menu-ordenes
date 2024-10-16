import '../ElementosCarrito.css';
import { useState } from 'react';
import huevos from '../images/huevos-estrellados.png';

const ElementosCarrito = ({
  precio,
  notas,
  modificador,
  preparacion,
  imagen,
}) => {
  const [cantidad, setCantidad] = useState(1);

  // ADAPTAR
  // const aumentarCantidad = () => setCantidad(cantidad + 1);
  // const disminuirCantidad = () => {
  //   if (cantidad > 1) {
  //     setCantidad(cantidad - 1);
  //   }
  // };

  return (
    <div className="elemento-carrito">
      <div className="elemento-carrito-imagen">
        <img src={huevos} alt="imagen" className="img-carrito-producto" />
      </div>
      <div className="detalles-producto">
        <h4>Huevos estrellados</h4>
        <p>
          {modificador}/{preparacion}
        </p>
        <p>Notas: {notas}</p>
      </div>
      <div className="control-cantidades">
        <button onClick={disminuirCantidad}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentarCantidad}>+</button>
      </div>
      <div className="precio-carrito-producto">
        <p>${precio}.00</p>
      </div>
      <button
        className="eliminar-producto"
        onClick={() => {
          setCantidad(0);
        }}
      >
        🗑️
      </button>
    </div>
  );
};

export default ElementosCarrito;

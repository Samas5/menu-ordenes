const Cantidades = ({ manejarCantidad, cantidad }) => {
  return (
    <div className="botones">
      <button
        className="boton-contador"
        onClick={() => manejarCantidad(-1)}
        disabled={cantidad <= 1}
      >
        <p className="text-contador"> - </p>
      </button>
      <span className="cantidad-orden">{cantidad}</span>
      <button className="boton-contador" onClick={() => manejarCantidad(1)}>
        <p className="text-contador">+</p>
      </button>
    </div>
  );
};

export default Cantidades;

import producto from "../images/solos.jpg";

const Resumen = ({ precio, preparacion, modificador }) => {
  return (
    <div className="container-resumen">
      <div className="resumen">
        <div className="fila">
          <p className="resumen-texto">Subtotal</p>
          <span className="resumen-texto">{`$${precio}.00`}</span>
        </div>
        <div className="fila">
          <p className="resumen-texto">Total</p>
          <span className="resumen-texto">{`$${precio}.00`}</span>
        </div>
        <button className="confirmar-orden">Confirmar</button>
        <div className="resumen-imagen-producto">
          <img
            className="resumen-imagen"
            src={producto}
            alt="huevos estrellados"
          />
          <div>
            <p className="resumen-texto">Huevos estrellados</p>
            <p className="resumen-texto">
              {modificador}/{preparacion}
            </p>
            <p className="resumen-texto">${precio}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumen;

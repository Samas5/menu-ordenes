import producto from "../images/solos.jpg";
import { useNavigate } from "react-router-dom";
const Resumen = ({
  precio,
  preparacion,
  modificador,
  notas,
  formaPago,
  ocultarBotonConfirmarOrden,
  showBotonConfirmarOrden,
}) => {
  const navigate = useNavigate();

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

        {showBotonConfirmarOrden && (
          <button
            className="confirmar-orden"
            disabled={!formaPago}
            style={{
              border: `${formaPago ? "none" : ""}`,
              color: `${formaPago ? "white" : ""}`,
              backgroundColor: `${formaPago ? " #4d82f3" : ""}`,
            }}
            onClick={() => {
              navigate("/confirmado");
              ocultarBotonConfirmarOrden();
            }}
          >
            Confirmar
          </button>
        )}

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
            <p className="resumen-texto">{notas}</p>
            <p className="resumen-texto">${precio}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumen;

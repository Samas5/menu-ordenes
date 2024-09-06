import producto from "../images/solos.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Resumen = ({
  precio,
  preparacion,
  modificador,
  notas,
  formaPago,
  ocultarBotonConfirmarOrden,
  setShowResumen,
  showBotonConfirmarOrden,
  setShowResumenImagen,
  showResumenImagen,
  setShowBotonConfirmar,
}) => {
  //* Función para cambiar funcionalidad del botón dependiendo de en qué ruta esté
  const handleBotonConfirmarOrden = () => {
    if (location.pathname === "/pago") {
      navigate("/confirmado");
      ocultarBotonConfirmarOrden();
    } else if (location.pathname === "/carrito") {
      navigate("/");
      ocultarResumenImagen(true);
      setShowResumen(false);
      setShowBotonConfirmar(true);
    }
  };

  //* Función para manejar el div de la imagen
  const ocultarResumenImagen = () => {
    setShowResumenImagen(true);
  };

  //* Navegacion
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
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
                navigate("/");
                ocultarResumenImagen();
                handleBotonConfirmarOrden();
              }}
            >
              Confirmar
            </button>
          )}

          {showResumenImagen && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default Resumen;

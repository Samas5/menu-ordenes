import check from "../images/check.webp";
import { useNavigate } from "react-router-dom";

const Confirmado = ({
  ocultarBotonConfirmarOrden,
  telefonoCliente,
  setTelefonoCliente,
}) => {
  const navigate = useNavigate();

  //* Función para obtener el número de teléfono del cliente
  const obtenerTelefono = (e) => {
    setTelefonoCliente(e.target.value);
  };

  return (
    <div className="contenedor">
      <header>
        <button
          className="regresar"
          onClick={() => {
            navigate("/pago");
            ocultarBotonConfirmarOrden();
          }}
        >
          <p className="flechita">←</p>
        </button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Pedido confirmado
        </h1>
      </header>
      <img className="check" src={check} alt="pedido confirmado" />
      <div className="section">
        <p className="text">Aquí tienes tu número de pedido</p>
        <input type="text" className="datos-usuario" value="3445" readOnly />
      </div>
      <form action="">
        <div className="section">
          <p className="text">
            Ingresa tu número de teléfono para <br /> recibir notificaciones de
            tu pedido
          </p>
          <input
            type="tel"
            className="datos-usuario"
            placeholder="Número de teléfono"
            onChange={obtenerTelefono}
            value={telefonoCliente}
            required
          />
        </div>
        <div className="contenedor-confirmar-cancelar">
          <button
            className="confirmar-orden"
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#4d82f3",
            }}
            onClick={() => navigate("/pedido-confirmado")}
          >
            Confirmar
          </button>
          <button
            className="confirmar-orden"
            onClick={() => {
              navigate("/pago");
              ocultarBotonConfirmarOrden();
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Confirmado;

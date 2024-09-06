import { useNavigate } from "react-router-dom";
import ticket from "../images/ticket.png";
const PedidoConfirmado = ({ telefonoCliente }) => {
  const navigate = useNavigate();

  return (
    <div className="contenedor">
      <header>
        <button
          className="regresar"
          onClick={() => {
            navigate("/confirmado");
          }}
        >
          <p className="flechita">←</p>
        </button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Pedido confirmado
        </h1>
      </header>

      <img className="ticket" src={ticket} alt="ticket del pedido" />

      <div className="section">
        <p className="text">
          Recibiras una notificación cuando <br /> tu pedido esté listo al
          número:
        </p>
        <input
          type="tel"
          className="datos-usuario"
          value={telefonoCliente}
          readOnly
        />
      </div>
      <div></div>
    </div>
  );
};

export default PedidoConfirmado;

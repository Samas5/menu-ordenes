import { useNavigate } from "react-router-dom";

const Pago = ({ setShowResumen }) => {
  const navigate = useNavigate();

  const handleShowResumen = () => {
    setShowResumen(true);
    navigate("/confirmado");
  };

  return (
    <div className="contenedor">
      <header>
        <button
          className="regresar"
          onClick={() => {
            navigate("/container");
            setShowResumen(false);
          }}
        >
          ←
        </button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Método de pago
        </h1>
      </header>
      <p className="small-text">
        Selecciona un método de pago para confirmar tu pedido
      </p>
      <div className="metodos-pago">
        <button className="boton-metodo">
          <i className="fa fa-money" style={{ color: "#64748B" }}></i>
          <p>Efectivo</p>
        </button>
        <button className="boton-metodo">
          <i className="fa fa-credit-card" style={{ color: "#64748B" }}></i>
          <p>Tarjeta de crédito o débito</p>
        </button>
        <button className="boton-metodo">
          <i className="fa fa-home" style={{ color: "#64748B" }}></i>
          <p>Cargo habitación</p>
        </button>
        <button className="boton-metodo">
          <i className="fa fa-paypal" style={{ color: "#64748B" }}></i>
          <p>PayPal</p>
        </button>
      </div>
      <div className="promocion">
        <p className="small-text">¿Tienes un código de promoción?</p>
        <input
          type="text"
          placeholder="Promoción"
          className="boton-metodo"
        ></input>
      </div>
    </div>
  );
};

export default Pago;

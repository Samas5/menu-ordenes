import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pago = ({
  setShowResumen,
  setShowBotonConfirmar,
  setPromocion,
  formaPago,
  setFormaPago,
}) => {
  const navigate = useNavigate();

  //* Función para seleccionar una forma de pago
  const seleccionarPago = (formaSeleccionada) => {
    setFormaPago(formaSeleccionada);
  };

  const cambiarFormaPago = (pago) => {
    if (pago === formaPago) {
      seleccionarPago("");
    } else {
      seleccionarPago(pago);
    }
  };

  //* Función para manejar la promoción
  const manejarPromocion = (e) => {
    setPromocion(e.target.value);
  };

  //* NAVEGACION
  useEffect(() => {
    setShowBotonConfirmar(false);
  }, [setShowBotonConfirmar]);

  return (
    <div className="contenedor">
      <header>
        <button
          className="regresar"
          onClick={() => {
            navigate("/");
            setShowResumen(false);
            setShowBotonConfirmar(true);
          }}
        >
          <p className="flechita">←</p>
        </button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Método de pago
        </h1>
      </header>
      <p className="small-text">
        Selecciona un método de pago para confirmar tu pedido
      </p>
      <div className="metodos-pago">
        <button
          className="boton-metodo"
          onClick={() => cambiarFormaPago("Efectivo")}
          style={{
            border: `${formaPago === "Efectivo" ? "3px solid blue" : ""}`,
          }}
        >
          <i className="fa fa-money" style={{ color: "#64748B" }}></i>
          <p>Efectivo</p>
        </button>
        <button
          className="boton-metodo"
          onClick={() => cambiarFormaPago("Tarjeta")}
          style={{
            border: `${formaPago === "Tarjeta" ? "3px solid blue" : ""}`,
          }}
        >
          <i className="fa fa-credit-card" style={{ color: "#64748B" }}></i>
          <p>Tarjeta de crédito o débito</p>
        </button>
        <button
          className="boton-metodo"
          onClick={() => cambiarFormaPago("Habitacion")}
          style={{
            border: `${formaPago === "Habitacion" ? "3px solid blue" : ""}`,
          }}
        >
          <i className="fa fa-home" style={{ color: "#64748B" }}></i>
          <p>Cargo habitación</p>
        </button>
        <button
          className="boton-metodo"
          onClick={() => cambiarFormaPago("Paypal")}
          style={{
            border: `${formaPago === "Paypal" ? "3px solid blue" : ""}`,
          }}
        >
          <i className="fa fa-paypal" style={{ color: "#64748B" }}></i>
          <p>PayPal</p>
        </button>
      </div>
      <div className="promocion">
        <p className="small-text">¿Tienes un código de promoción?</p>
        <input
          onChange={manejarPromocion}
          type="text"
          placeholder="Promoción"
          className="boton-metodo"
        ></input>
      </div>
    </div>
  );
};

export default Pago;

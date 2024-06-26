import check from "../images/check.webp";

const Confirmado = ({
  showBotonConfirmarOrden,
  setShowBotonConfirmarOrden,
}) => {
  return (
    <div className="contenedor">
      <header>
        <button className="regresar">←</button>
        <h1 style={{ marginTop: "0px" }} className="titulo">
          Pedido confirmado
        </h1>
      </header>
      <img className="check" src={check} alt="pedido confirmado" />
      <p className="text">Aquí tienes tu número de pedido</p>

      <input type="text" className="numero-pedido" value="123456" readOnly />
    </div>
  );
};

export default Confirmado;

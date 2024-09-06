import cocidos from "../images/cocidos.png";
import claras from "../images/claras.png";
import tiernos from "../images/tiernos.png";
const Preparacion = ({ preparacion, seleccionPreparacion }) => {
  const cambiarPreparacion = (prep) => {
    if (preparacion === prep) {
      seleccionPreparacion("");
    } else {
      seleccionPreparacion(prep);
    }
  };

  return (
    <>
      <p className="text">Preparacion</p>
      <div className="contenedor-preparacion">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              height: "50px",
              width: "50px",
              border: `${
                preparacion === "Bien cocido" ? "2px solid blue" : ""
              }`,
            }}
            className="boton-imagenes"
            onClick={() => cambiarPreparacion("Bien cocido")}
          >
            <img
              src={cocidos}
              alt="huevos estrellados cocidos"
              className="imagen-boton"
            />
          </button>
          <span>Cocidos</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              height: "50px",
              width: "50px",
              border: `${preparacion === "Claras" ? "2px solid blue" : ""}`,
            }}
            className="boton-imagenes"
            onClick={() => cambiarPreparacion("Claras")}
          >
            <img src={claras} alt="claras" className="imagen-boton" />
          </button>
          <span>Claras</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              height: "50px",
              width: "50px",
              border: `${preparacion === "Tierno" ? "2px solid blue" : ""}`,
            }}
            className="boton-imagenes"
            onClick={() => cambiarPreparacion("Tierno")}
          >
            <img src={tiernos} alt="huevos tiernos" className="imagen-boton" />
          </button>
          <span>Tiernos</span>
        </div>
      </div>
    </>
  );
};

export default Preparacion;

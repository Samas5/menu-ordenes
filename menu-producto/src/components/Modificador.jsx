import solos from "../images/solos.jpg";
import tocino from "../images/tocino.png";

const Modificador = ({ modificador, seleccionModificador }) => {
  const cambiarModificador = (mod) => {
    if (modificador === mod) {
      seleccionModificador("");
    } else {
      seleccionModificador(mod);
    }
  };

  return (
    <>
      <p className="text">Modificadores</p>
      <div className="contenedor-modificadores">
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
              border: `${modificador === "Solos" ? "2px solid blue" : ""}`,
            }}
            className="boton-imagenes"
            onClick={() => cambiarModificador("Solos")}
          >
            <img
              src={solos}
              alt="huevos estrellados solos"
              className="imagen-boton"
            />
          </button>
          <span>Solos</span>
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
              border: `${modificador === "Tocino" ? "2px solid blue" : ""}`,
            }}
            className="boton-imagenes"
            onClick={() => cambiarModificador("Tocino")}
          >
            <img
              src={tocino}
              alt="huevos estrellados con tocino"
              className="imagen-boton"
            />
          </button>
          <span>Tocino</span>
        </div>
      </div>
    </>
  );
};

export default Modificador;

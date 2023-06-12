import React from "react";
import "./ml.css";
const Mercado = () => {
  return (
    <div className="pr2">
      <div className="pr2-project">
        <h1>Mercado Libre</h1>
        <p>
          This is a project in which I made a front-end copy of the Mercado
          Libre website
        </p>
      </div>
      {/* segunda columna comienza acá */}
      <div className="images-ml">
        <img alt="" src="/imagenes/ml/1.png" />
        <img alt="" src="/imagenes/ml/2.png" />
        <img alt="" src="/imagenes/ml/3.png" />
      </div>
    </div>
  );
};
export default Mercado;

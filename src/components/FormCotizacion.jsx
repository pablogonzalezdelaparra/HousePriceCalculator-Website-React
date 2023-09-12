import React, { Fragment, useState } from "react";
import FormCotizacionStyle from "../styles/FormCotizacionStyle.css";
import { TextInputField } from "evergreen-ui";
import { BiArrowToRight } from "react-icons/bi";

function FormCotizacion() {
  const [loading, setLoading] = useState(false);

  const enviarCotizacion = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 4000);
    };

  return (
    <Fragment>
      <div className="main-container">
        <div className="form-container">
          {loading ? (
            <div className="loading">
              <svg
                height="100"
                stroke="#3f51f4"
                stroke-width="1"
                class="text-line"
              >
                <text
                  x="25"
                  y="90"
                  fill="none"
                  font-size="50"
                >
                  Cargando...
                </text>
              </svg>
            </div>
          ) : (
            <Fragment>
              <div className="form-header">
                <p className="form-title">Realiza tu cotización</p>
              </div>
              <div className="form-body">
                <TextInputField
                  label="Ejemplo de input"
                  placeholder="Ejemplo"
                  type="text"
                  required
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  width="100%"
                  inputWidth="100%"
                />
                <div className="button" onClick={()=>{enviarCotizacion()}}>
                  <span>Enviar</span>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default FormCotizacion;

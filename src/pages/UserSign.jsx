import React, { Fragment, useState, useEffect } from "react";
import UserSignStyle from "../styles/UserSignStyle.css";
import icon from "../assets/icon-sign.png";
import Logo from '../assets/logo.png'

import { TextInputField } from "evergreen-ui";

function UserSign(props) {
  const [title, setTitle] = useState("Iniciar Sesión");
  const [verifyFlag, setVerifyFlag] = useState(false);
  const [disabledFlag, setDisabledFlag] = useState(false);

  useEffect(() => {
    if (title === "Registrarse") {
      setDisabledFlag(verifyFlag);
    }else{
      setDisabledFlag(false);
    }
  }, [verifyFlag]);

  return (
    <Fragment>
      <div className="background-blue">
        <div className="logo">
          <img src={Logo} alt="Mavericks Logo" />
        </div>
      </div>
      <div>
        <div className="icon">
          <img src={icon} alt="Sign Icon" />
        </div>
        <div className="container">
          <div className="header">
            <div className="title">
              <p>
                Bienvenido a <span> <a href="#">Mavericks</a></span>
              </p>
              <p className="main-title">{title}</p>
            </div>
            <div className="optional">
              <p>
                {title === "Iniciar Sesión"
                  ? "¿No tienes cuenta?"
                  : "¿Ya tienes cuenta?"}
                <br />
                <span onClick={() => {
                  setTitle(title === "Iniciar Sesión" ? "Registrarse" : "Iniciar Sesión");
                }}>
                  <a href="#">
                    {title === "Iniciar Sesión" ? "Registrarse" : "Iniciar Sesión"}
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="form">
            <TextInputField
                label="Ingresa tu correo electrónico"
                placeholder="Correo electrónico"
                type="email"
                required
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                width="100%"
                inputWidth="100%"
                disabled={disabledFlag}
            />
            {
                title === "Registrarse" ? (
                    <div className="user-data">
                        <TextInputField
                            label="Nombre"
                            placeholder="Nombre"
                            type="text"
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            width="100%"
                            inputWidth="100%"
                            disabled={disabledFlag}
                        />
                        <TextInputField
                            label="Apellido"
                            placeholder="Apellido"
                            type="text"
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            width="100%"
                            inputWidth="100%"
                            disabled={disabledFlag}
                        />
                    </div>
                ) : null
            }
            <TextInputField
                label="Ingresa tu contraseña"
                placeholder="Contraseña"
                type="password"
                required
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                width="100%"
                inputWidth="100%"
                disabled={disabledFlag}
            />
            {
              (verifyFlag && title === "Registrarse"  )? (
                <TextInputField
                  label="Ingresa el código de verificación"
                  placeholder="Código de verificación"
                  type="number"
                  required
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  width="100%"
                  inputWidth="100%"
                />
              ) : null
            }
          </div>
          <div className="button" onClick={()=>{
            if (title === "Registrarse" && !verifyFlag) {
              setVerifyFlag(true);
            }}}>
            {title === "Registrarse" ? verifyFlag ?  "Validar código" : "Registrarse" : "Ingresar"}
          </div>
          <p className="datos-requeridos">
            * Datos requeridos
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default UserSign;

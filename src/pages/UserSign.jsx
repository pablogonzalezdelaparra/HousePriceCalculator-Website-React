import React, { Fragment, useState } from "react";
import UserSignStyle from "../styles/UserSignStyle.css";
import icon from "../assets/icon-sign.png";
import Logo from '../assets/logo.png'

import { TextInputField } from "evergreen-ui";

function UserSign(props) {
  const [title, setTitle] = useState("Regístrate");
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
                Bienvenido a <span>Mavericks</span>
              </p>
              <p className="main-title">{title}</p>
            </div>
            <div className="optional">
              <p>
                {title === "Inicia Sesión"
                  ? "¿No tienes cuenta?"
                  : "¿Ya tienes cuenta?"}
                <br />
                <span onClick={() => {}}>
                  {title === "Inicia Sesión" ? "Regístrate" : "Inicia Sesión"}
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
            />
            {
                title === "Regístrate" ? (
                    <div className="user-data">
                        <TextInputField
                            label="Nombre"
                            placeholder="Nombre de usuario"
                            type="text"
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            width="100%"
                            inputWidth="100%"
                        />
                        <TextInputField
                            label="Apellido"
                            placeholder="Apellido de usuario"
                            type="text"
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            width="100%"
                            inputWidth="100%"
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
            />
          </div>
          <div className="button">
            {title === "Regístrate" ? "Registrarse" : "Ingresa"}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserSign;

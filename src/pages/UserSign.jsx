import React, { Fragment, useState, useEffect } from "react";
import UserSignStyle from "../styles/UserSignStyle.css";
import icon from "../assets/icon-sign.png";
import Logo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp, signIn, verifyCode } from "../services/authService";
import Cookies from "js-cookie";

import { TextInputField } from "evergreen-ui";

function UserSign(props) {
  const [title, setTitle] = useState("Iniciar Sesión");
  const [verifyFlag, setVerifyFlag] = useState(false);
  const [disabledFlag, setDisabledFlag] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    verifyCode: "",
  });

  const editUserInfo = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  useEffect(() => {
    if (title === "Registrarse") {
      setDisabledFlag(verifyFlag);
    } else {
      setDisabledFlag(false);
    }
  }, [verifyFlag]);

  const registroDatosUsuario = async () => {
    toast.promise(
      async () => {
        if (verifyFlag && title === "Registrarse") {
          // Validar código de verificación
          const response = await verifyCode(userInfo);
          if (response !== "ok") {
            throw new Error("Código de verificación incorrecto");
          }
          // Iniciar sesión con usuario registrado
          const signInResponse = await signIn(userInfo);
          if (signInResponse === undefined || null) {
            // TODO: Redireccionar a página de iniciar sesión
            console.log("Error al iniciar sesión con usuario registrado");
          }

          // TODO: Redireccionar a página de inicio
          console.log("Usuario registrado y logueado correctamente");

          // Guardar token en cookies
          Cookies.set("userToken", signInResponse);
        } else if (title === "Registrarse") {
          // Registrar usuario
          const response = await signUp(userInfo);
          if (response !== "ok") {
            throw new Error("Error al registrar usuario");
          }

          // TODO: Redireccionar a página de inicio
          console.log("Usuario registrado correctamente");
        } else {
          // Iniciar sesión
          const response = await signIn(userInfo);
          if (response === undefined || null) {
            throw new Error("Datos de usuario incorrectos");
          }
          // Guardar token en cookies
          Cookies.set("userToken", response);

          // TODO: Redireccionar a página de inicio
          console.log("Usuario logueado correctamente");
        }
      },
      {
        pending: "Accediendo a tu cuenta...",
        success: "Acceso correcto a tu cuenta. Redireccionando...",
        error: "Error al acceder a tu cuenta. Inténtalo de nuevo.",
      },
      {
        toastId: "DatosUsuarioIncorrectos",
        pauseOnFocusLoss: false,
      }
    );
  };

  return (
    <Fragment>
      <ToastContainer />
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
                Bienvenido a{" "}
                <span>
                  {" "}
                  <a href="#">Mavericks</a>
                </span>
              </p>
              <p className="main-title">{title}</p>
            </div>
            <div className="optional">
              <p>
                {title === "Iniciar Sesión"
                  ? "¿No tienes cuenta?"
                  : "¿Ya tienes cuenta?"}
                <br />
                <span
                  onClick={() => {
                    setTitle(
                      title === "Iniciar Sesión"
                        ? "Registrarse"
                        : "Iniciar Sesión"
                    );
                  }}
                >
                  <a href="#">
                    {title === "Iniciar Sesión"
                      ? "Registrarse"
                      : "Iniciar Sesión"}
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
                editUserInfo("email", e.target.value);
              }}
              width="100%"
              inputWidth="100%"
              disabled={disabledFlag}
            />
            {title === "Registrarse" ? (
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
            ) : null}
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
            {verifyFlag && title === "Registrarse" ? (
              <TextInputField
                label="Ingresa el código de verificación"
                placeholder="Código de verificación"
                type="number"
                required
                onChange={(e) => {
                  editUserInfo("verifyCode", e.target.value);
                }}
                width="100%"
                inputWidth="100%"
              />
            ) : null}
          </div>
          <div
            className="button"
            onClick={() => {
              if (title === "Registrarse" && !verifyFlag) {
                setVerifyFlag(true);
              }
              registroDatosUsuario();
            }}
          >
            {title === "Registrarse"
              ? verifyFlag
                ? "Validar código"
                : "Registrarse"
              : "Ingresar"}
          </div>
          <p className="datos-requeridos">* Datos requeridos</p>
        </div>
      </div>
    </Fragment>
  );
}

export default UserSign;

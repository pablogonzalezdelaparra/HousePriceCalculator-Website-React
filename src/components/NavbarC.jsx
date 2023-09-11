import React, { useEffect, useState, useContext } from "react";
import NavbarCStyle from "../styles/NavbarCStyle.css";
import Logo from "../assets/logo.png";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../pages/RoutesPage";

function NavbarC() {
  const [title, setTitle] = useState("Iniciar Sesión");
  const { userData, setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userData){
      const userToken = Cookies.get("userToken");
      const name = Cookies.get("name");
      const lastName = Cookies.get("lastName");
      if (userToken && name && lastName) {
        setUserData({ userToken, name, lastName });
      }
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setTitle("Cerrar Sesión");
    } else {
      setTitle("Iniciar Sesión");
    }
  }, [userData]);

  const handleTitle = () => {
    if (title === "Cerrar Sesión") {
      toast.promise(
        async () => {
            Cookies.remove("userToken");
            setTitle("Iniciar Sesión");
        },
        {
          pending: "Cerrando sesión...",
          success: "Sesión cerrada",
          error: "Error al cerrar sesión",
        }, {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          autoClose: 3000,
        }
      )
      Cookies.remove("userToken");
      Cookies.remove("name");
      Cookies.remove("lastName");
      setTitle("Iniciar Sesión");
      setUserData(null);
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Mavericks Logo" />
      </div>
      <div className="links">
        <a>Inicio</a>
        <a>Misión</a>
        <a>Contacto</a>
        <div className="login">
            <a onClick={handleTitle}>
              {title}
            </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarC;

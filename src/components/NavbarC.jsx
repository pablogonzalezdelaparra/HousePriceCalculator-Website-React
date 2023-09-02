import React, { useEffect, useState } from "react";
import NavbarCStyle from "../styles/NavbarCStyle.css";
import Logo from "../assets/logo.png";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

function NavbarC() {
  const [title, setTitle] = useState("Iniciar Sesión");
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = Cookies.get("userToken");
    if (userToken && title === "Iniciar Sesión") {
      setTitle("Cerrar Sesión");
    }
  }, []);

  // if title is "Cerrar Sesión" then delete cookies
  const handleTitle = () => {
    if (title === "Cerrar Sesión") {
      Cookies.remove("userToken");
      setTitle("Iniciar Sesión");
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
        <a href="#">Inicio</a>
        <a href="#">Misión</a>
        <a href="#">Contacto</a>
        <div className="login">
            <a href="#" onClick={()=>handleTitle()}>
              {title}
            </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarC;

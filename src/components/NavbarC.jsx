import React, { useState } from "react";
import NavbarCStyle from "../styles/NavbarCStyle.css";
import Logo from "../assets/logo.png";

function NavbarC() {

  return (
    <nav className="navbar">
        <div className="logo">
            <img src={Logo} alt="Mavericks Logo"/>
        </div>
        <div className="links">
            <a href="#">Inicio</a>
            <a href="#">Misión</a>
            <a href="#">Contacto</a>
            <div className="login">
                <a href="#">Iniciar Sesión</a>
            </div>
        </div>
    </nav>
  );
}

export default NavbarC;

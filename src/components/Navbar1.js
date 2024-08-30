import React, { useState } from "react";
import "../Navbar.css";
import logo from "../images/logo.png";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="nav-logo" alt="backroads" />
      </div>
      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`menu-items ${isOpen ? "open" : ""}`}>
          <a href="http://localhost:3000/#inicio">Inicio</a>
          <a href="http://localhost:3000/#noticias">Diseños</a>
          <a href="http://localhost:3000/#nosotros">Sobre mí</a>
          <a href="http://localhost:3000/#info">Más información</a>
          <a href="http://localhost:3000/#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;

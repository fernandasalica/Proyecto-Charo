import React, { useState, useContext } from "react";
import "../css/Navbar.css";
// import logo from "../images/logo.png";
import logo from "../images/LogoGretaOto.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Ajusta la ruta según tu estructura de archivos

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { itemCount } = useContext(CartContext); // Obtén el conteo de elementos del contexto

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="http://localhost:3000/#inicio">
          <img src={logo} className="nav-logo" alt="backroads" />
        </a>
      </div>
      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`menu-items ${isOpen ? "open" : ""}`}>
          <a href="http://localhost:3000/#inicio">Inicio</a>
          <a href="http://localhost:3000/#noticias">Diseños</a>
          <a href="http://localhost:3000/#nosotros">Sobre Nosotros</a>
          <a href="http://localhost:3000/#info">Más Información</a>
          <a href="http://localhost:3000/#contacto">Contacto</a>
        </div>
      </div>
      <div className="navbar-menu">
        <Link to="/cart">
          <i className="fas fa-shopping-cart" style={{ fontSize: "24px" }}></i>
          {itemCount > 0 && (
            <span
              className="badge"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "11px",
              }}
            >
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar1;

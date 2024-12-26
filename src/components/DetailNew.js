import { useParams } from "react-router-dom";
import { tours } from "../data";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/DetailNew.css";
import { services } from "../data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailNew = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convertir el ID obtenido de useParams a un número (o viceversa) si es necesario
  const parsedId = parseInt(id);

  // Filtrar el array de tours basado en el ID
  const filteredTour = tours.find((tour) => tour.id === parsedId);
  const { addToCart } = useContext(CartContext); // Consume el contexto

  const handleAddToCart = () => {
    if (filteredTour) {
      addToCart(filteredTour); // Agrega el producto al carrito
      toast.success(`${filteredTour.title} ha sido agregado al carrito.`, {
        autoClose: 2000, // Duración en milisegundos
      });
    }
  };

  const images = [
    filteredTour.image1,
    filteredTour.image2,
    filteredTour.image3,
    filteredTour.image4,
    filteredTour.image5,
    filteredTour.image6,
  ];

  // Filtra solo las imagenes que exiten en el array
  const existingImages = images.filter((image) => image !== undefined);

  // Verificar si se encontró un tour con el ID dado
  if (!filteredTour) {
    return <div>No se encontró ningún diseño</div>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? existingImages.length - 1
        : currentImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === existingImages.length - 1
        ? 0
        : currentImageIndex + 1
    );
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="detail-container">
        <div className="image-section">
          <img
            src={existingImages[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="img"
          />
          {existingImages.length > 1 && (
            <>
              <button onClick={handlePrevImage} className="btn">
                Anterior
              </button>
              <button onClick={handleNextImage} className="btn">
                Siguiente
              </button>
            </>
          )}
        </div>
        <div className="info-section">
          <h3>{filteredTour.title}</h3>
          <p className="price">$ {filteredTour.price}</p>
          <p className="info">{filteredTour.info}</p>
          <hr></hr>
          <p>
            <i class="fa-solid fa-truck"></i>
            <strong> Envío GRATIS</strong> a San Miguel De Tucumán (4000)
          </p>
          <hr></hr>
          <button onClick={handleAddToCart} className="btn">
            Agregar al Carrito
          </button>
          <ToastContainer />
        </div>
      </div>
      <hr></hr>
      <div className="section-center services-center services-container">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default DetailNew;

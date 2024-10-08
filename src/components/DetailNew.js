import { useParams } from "react-router-dom";
import { tours } from "../data";
import React, { useState } from "react";

const DetailNew = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convertir el ID obtenido de useParams a un número (o viceversa) si es necesario
  const parsedId = parseInt(id);

  // Filtrar el array de tours basado en el ID
  const filteredTour = tours.find((tour) => tour.id === parsedId);

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
    return <div>No se encontró la noticia con el ID especificado</div>;
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
      <div className="container">
        <h4>{filteredTour.title}</h4>
      </div>
      <div className="gallery">
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
      <p className="info">{filteredTour.info}</p>
    </>
  );
};

export default DetailNew;

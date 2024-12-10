import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Pagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el índice del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Cambia a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Cambia a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="section-center featured-center">
        {currentItems.map((tour) => {
          const { id, image1, price, title } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <Link to={`/detalle/${id}`}>
                  <img src={image1} className="tour-img" alt="" />
                </Link>
                <p className="tour-date">$ {price}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>
                    <Link to={`/detalle/${id}`}>{title}</Link>
                  </h4>
                </div>
                <div className="tour-footer">
                  <p>
                    <span>
                      <button onClick={() => addToCart(tour)} className="btn1">
                        Agregar al Carrito
                      </button>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="btn">
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastItem >= data.length}
          className="btn"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
export default Pagination;

import React, { useState } from "react";
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

  return (
    <div>
      <div className="section-center featured-center">
        {currentItems.map((tour) => {
          const { id, image1, date, title, info_summary } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image1} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                {/* <p>{info_summary}</p> */}
                <div className="tour-footer">
                  <p>
                    <span>
                      <Link to={`/detalle/${id}`}>Más info...</Link>
                    </span>{" "}
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

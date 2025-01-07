import { tours } from "../data";
import Pagination from "./Pagination";

const News1 = () => {
  const itemsPerPage = 3; // Número de objetos por página

  return (
    <>
      <section className="section" id="noticias">
        <h3 className="title">También te puede interesar...</h3>
        <Pagination data={tours} itemsPerPage={itemsPerPage} />
      </section>
    </>
  );
};
export default News1;

import Title from "./Title";
import { tours } from "../data";
import Pagination from "../components/Pagination";

const News = () => {
  const itemsPerPage = 3; // Número de objetos por página
  return (
    <>
      <section className="section" id="noticias">
        <Title title="mis" subTitle="diseños" />
        <Pagination data={tours} itemsPerPage={itemsPerPage} />
      </section>
    </>
  );
};
export default News;

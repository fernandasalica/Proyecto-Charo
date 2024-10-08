import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar1";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import DetailNew from "./components/DetailNew";

function App() {
  return (
    <>
      <div className="container">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detalle/:id" element={<DetailNew />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

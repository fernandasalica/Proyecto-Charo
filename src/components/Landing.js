import About from "../components/About";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Contact from "./Contact";
import News from "./News";

const Landing = () => {
  return (
    <>
      <Hero />
      <News />
      <About />
      <Services />
      <Contact />
    </>
  );
};
export default Landing;

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;

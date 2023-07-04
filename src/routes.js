import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
    </Routes>
  );
}

export default Routers;

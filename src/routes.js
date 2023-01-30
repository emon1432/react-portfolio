import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default Routers;

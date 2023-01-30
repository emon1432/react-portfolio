import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./common/footer";
import Header from "./common/header";
import PreLoader from "./common/pre-loader";
import reportWebVitals from "./reportWebVitals";
import Routers from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PreLoader />
    <Router>
      <Header />
      <Routers />
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

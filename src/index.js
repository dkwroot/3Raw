import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import Navbar from "./components/navbar";

import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilAlt,
  faLayerGroup,
  faCloudDownloadAlt,
  faCube
} from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

library.add(fab, faPencilAlt, faLayerGroup, faCloudDownloadAlt, faCube);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
